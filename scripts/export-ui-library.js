
/**
 * This script can be used to export the UI component library to another project.
 * 
 * Usage: 
 * 1. Save this file in your project root as export-ui-library.js
 * 2. Run: node export-ui-library.js /path/to/target/project
 * 
 * Requirements: Node.js and fs-extra package
 * npm install fs-extra
 */

const fs = require('fs-extra');
const path = require('path');

// Get target directory from command line argument
const targetDir = process.argv[2];

if (!targetDir) {
  console.error('Please provide a target directory path.');
  console.error('Usage: node export-ui-library.js /path/to/target/project');
  process.exit(1);
}

// Source directories and files to copy
const sources = [
  { src: 'src/components/ui', dest: 'src/components/ui' },
  { src: 'src/lib/utils.ts', dest: 'src/lib/utils.ts' },
  { src: 'src/hooks/use-toast.ts', dest: 'src/hooks/use-toast.ts' },
  { src: 'src/hooks/use-mobile.tsx', dest: 'src/hooks/use-mobile.tsx' }
];

// Ensure the target directory exists
fs.ensureDirSync(targetDir);

// Copy each source to the target
sources.forEach(({ src, dest }) => {
  const sourcePath = path.resolve(src);
  const targetPath = path.resolve(targetDir, dest);
  
  // Ensure destination directory exists
  fs.ensureDirSync(path.dirname(targetPath));
  
  // Copy the files
  try {
    fs.copySync(sourcePath, targetPath, { overwrite: false });
    console.log(`✅ Copied ${src} to ${dest}`);
  } catch (err) {
    console.error(`❌ Error copying ${src} to ${dest}:`, err.message);
  }
});

console.log('\nUI library exported successfully! 🎉');
console.log('\nMake sure to:');
console.log('1. Install the required dependencies (see README.md in the UI directory)');
console.log('2. Configure your tailwind.config.js as described in the README');
console.log('3. Add the CSS variables to your global CSS file');
