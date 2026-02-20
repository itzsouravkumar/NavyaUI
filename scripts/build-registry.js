import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UI_DIR = path.join(__dirname, '../src/components/ui');
const NAVYAUI_DIR = path.join(__dirname, '../src/components/navyaui');
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

    const processDirectory = (dir, typePath) => {
        if (!fs.existsSync(dir)) return;
        
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

        for (const file of files) {
            // e.g. MeteorBackground.tsx -> meteor-background
            const componentName = file.replace('.tsx', '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            const filePath = path.join(dir, file);
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
                        path: `${typePath}/${file}`,
                        content: content,
                        type: "registry:ui",
                        target: `components/${typePath}/${file}`
                    }
                ],
                tailwind: {}
            };

            // Custom logic for meteor background to add tailwind config automatically
            if (componentName === 'meteor-background') {
                registryItem.tailwind = {
                    config: {
                        theme: {
                            extend: {
                                animation: {
                                    "navyaui-meteor": "navyaui-meteor 5s linear infinite",
                                },
                                keyframes: {
                                    "navyaui-meteor": {
                                        "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
                                        "70%": { opacity: 1 },
                                        "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: 0 },
                                    },
                                }
                            }
                        }
                    }
                }
            }

            const outPath = path.join(REGISTRY_DIR, `${componentName}.json`);
            fs.writeFileSync(outPath, JSON.stringify(registryItem, null, 2));
            console.log(`✅ Generated registry for: ${componentName}`);
        }
    };

    processDirectory(UI_DIR, 'ui');
    processDirectory(NAVYAUI_DIR, 'navyaui');

    console.log('🎉 Registry build complete!');
}

buildRegistry().catch(console.error);
