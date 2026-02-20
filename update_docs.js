import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src/pages/components');
const componentsDir = path.join(__dirname, 'src/components/navyaui');

const mappings = {
    'ThreeDCardPage.tsx': 'ThreeDCard.tsx',
    'BackgroundBeamsPage.tsx': 'BackgroundBeams.tsx',
    'FlipWordsPage.tsx': 'FlipWords.tsx',
    'FloatingDockPage.tsx': 'FloatingDock.tsx',
    'InfiniteMovingCardsPage.tsx': 'InfiniteMovingCards.tsx',
    'MovingBorderPage.tsx': 'MovingBorder.tsx',
    'SpotlightCardPage.tsx': 'SpotlightCard.tsx',
    'TextGeneratePage.tsx': 'TextGenerateEffect.tsx',
};

// Also we need to update "components/ui/NAME.tsx" to "components/navyaui/NAME.tsx" in the "Install Manually" instructions.
// And "clsx tailwind-merge" in the "Install dependencies" section.
// And the util file step.

Object.entries(mappings).forEach(([pageFile, componentFile]) => {
    const pagePath = path.join(pagesDir, pageFile);
    if (!fs.existsSync(pagePath)) return;
    
    let pageContent = fs.readFileSync(pagePath, 'utf-8');
    
    const componentPath = path.join(componentsDir, componentFile);
    const componentContent = fs.readFileSync(componentPath, 'utf-8');
    
    // Replace SOURCE_CODE
    // Find const SOURCE_CODE = `...`;
    const sourceCodeRegex = /const SOURCE_CODE = `([\s\S]*?)`;/;
    
    // We must escape backticks and ${} in componentContent for template literal injection
    // But wait, the source code we want to store IS a string representing code, so we escape ` and ${} within the template literal:
    const escapedContent = componentContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    
    pageContent = pageContent.replace(sourceCodeRegex, `const SOURCE_CODE = \`${escapedContent}\`;`);
    
    // Remove util file step (step 2)
    pageContent = pageContent.replace(/<div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">2<\/div><div className="w-px flex-1 bg-border\/30 mt-2" \/><\/div><div className="flex-1 min-w-0 pb-2"><p className="text-sm font-medium text-foreground mb-3">Add util file<\/p><CodeBlock code=\{\`import \{ ClassValue, clsx \} from "clsx";\\nimport \{ twMerge \} from "tailwind-merge";\\n\\nexport function cn\(\.\.\.inputs: ClassValue\[\]\) \{\\n  return twMerge\(clsx\(inputs\)\);\\n\}\`\} language="tsx" filename="lib\/utils\.ts" \/><\/div><\/div>/g, '');
    
    // Update step 3 to step 2 (Copy source code)
    pageContent = pageContent.replace(/<div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">3<\/div>/g, '<div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">2</div>');
    
    // Remove "clsx tailwind-merge" from npm install instructions
    pageContent = pageContent.replace(/npm install clsx tailwind-merge/g, ''); // when it was just them
    pageContent = pageContent.replace(/clsx tailwind-merge/g, ''); // when it was combined with framer-motion
    
    // Fix empty npm install (if framer-motion wasn't there)
    pageContent = pageContent.replace(/<div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1<\/div><div className="w-px flex-1 bg-border\/30 mt-2" \/><\/div><div className="flex-1 min-w-0 pb-2"><p className="text-sm font-medium text-foreground mb-3">Install dependencies<\/p><CodeBlock code="npm install " language="bash" filename="Terminal" \/><\/div><\/div>/g, '');
    pageContent = pageContent.replace(/<div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1<\/div><div className="w-px flex-1 bg-border\/30 mt-2" \/><\/div><div className="flex-1 min-w-0 pb-2"><p className="text-sm font-medium text-foreground mb-3">Install dependencies<\/p><CodeBlock code="npm install  " language="bash" filename="Terminal" \/><\/div><\/div>/g, ''); // with trailing spaces
    pageContent = pageContent.replace(/<div className="flex gap-4"><div className="flex flex-col items-center"><div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1<\/div><div className="w-px flex-1 bg-border\/30 mt-2" \/><\/div><div className="flex-1 min-w-0 pb-2"><p className="text-sm font-medium text-foreground mb-3">Install dependencies<\/p><CodeBlock code="npm install" language="bash" filename="Terminal" \/><\/div><\/div>/g, '');

    // Now if step 1 was removed, step 2 (copy source code) should become step 1!
    // But wait, it's easier to just blindly rename 2 to 1 if 1 is missing? Let's just do a regex replace if "Install dependencies" is not present in the space-y-6 block.
    // If the file does not have "npm install framer-motion", then step 1 is "Copy the source code".
    if (!pageContent.includes('npm install framer-motion')) {
        pageContent = pageContent.replace(/<div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">2<\/div>/g, '<div className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold shrink-0">1</div>');
    }

    // Replace CLI link to use kebab-case registry json
    const kebabCase = componentFile.replace('.tsx', '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    pageContent = pageContent.replace(/https:\/\/navyaui.vercel.app\/r\/[a-z0-9-]+\.json/g, `https://navyaui.vercel.app/r/${kebabCase}.json`);

    // Replace Paste into path: components/ui/... -> components/navyaui/...
    // Note: the original paths were kebab case (e.g. 3d-card.tsx) but the new ones are PascalCase (e.g. ThreeDCard.tsx).
    pageContent = pageContent.replace(/components\/ui\/[a-z0-9-]+\.tsx/g, `components/navyaui/${componentFile}`);
    
    // Also update any import statements in the Example Usage code block
    pageContent = pageContent.replace(/import \{ ([^}]+) \} from "@\/components\/ui\/[a-z0-9-]+"/g, `import { $1 } from "@/components/navyaui/${componentFile.replace('.tsx', '')}"`);

    fs.writeFileSync(pagePath, pageContent);
    console.log(`Updated ${pageFile}`);
});
