import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UI_DIR = path.join(__dirname, '../src/components/ui');
const REGISTRY_DIR = path.join(__dirname, '../public/r');

// Dependencies that are external and need to be added to package.json
// clsx and tailwind-merge are standard standard shadcn deps, so we only track others
const DEPENDENCY_MAP = {
    'framer-motion': 'framer-motion',
    'lucide-react': 'lucide-react',
    // add others as needed
};

async function buildRegistry() {
    console.log('Building NavyaUI Registry...');
    
    if (!fs.existsSync(REGISTRY_DIR)) {
        fs.mkdirSync(REGISTRY_DIR, { recursive: true });
    }

    const files = fs.readdirSync(UI_DIR).filter(f => f.endsWith('.tsx'));

    for (const file of files) {
        const componentName = file.replace('.tsx', '');
        const filePath = path.join(UI_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        // Detect dependencies
        const dependencies = [];
        for (const [key, pkg] of Object.entries(DEPENDENCY_MAP)) {
            if (content.includes(`from "${key}"`) || content.includes(`from '${key}'`)) {
                dependencies.push(pkg);
            }
        }

        const registryItem = {
            name: componentName,
            type: "registry:ui",
            dependencies: dependencies,
            files: [
                {
                    path: `ui/${file}`,
                    content: content,
                    type: "registry:ui",
                    target: `components/ui/${file}`
                }
            ]
        };

        const outPath = path.join(REGISTRY_DIR, `${componentName}.json`);
        fs.writeFileSync(outPath, JSON.stringify(registryItem, null, 2));
        console.log(`✅ Generated registry for: ${componentName}`);
    }

    // Also generate an index/colors.json file if needed for registries, though simple components just need the individual files
    console.log('🎉 Registry build complete!');
}

buildRegistry().catch(console.error);
