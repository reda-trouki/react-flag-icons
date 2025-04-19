const fs = require('fs');
const path = require('path');

// Get all JSX files in the components directory
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir)
  .filter(file => file.endsWith('.jsx'));

console.log(`Found ${files.length} component files to process`);

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file already has size prop
  if (content.includes('size=24')) {
    console.log(`Skipping ${file} - already has size prop`);
    return;
  }
  
  // Replace the component function signature and add width/height props
  content = content.replace(
    /const (Svg[A-Za-z]+) = \(props\) => \(/g, 
    'const $1 = ({size=24, ...props}) => ('
  );
  
  content = content.replace(
    /<svg/g, 
    '<svg\n    width={size}\n    height={size}'
  );
  
  // Write the modified content back to the file
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});

console.log('Component update complete!');
