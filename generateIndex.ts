const fs = require('fs'); const path = require('path'); const directoryPath = './src/app';
const components = [ 'TaskList', 'PropsToCompExample', 'ConditionalRenderingExample', 'RenderingListsExample', 'PureComponent' ];
const exportStatements = components.map(component => `export { default as ${component} } from './${component}';`).join('\n'); 
const indexPath = path.resolve(directoryPath, 'index.ts'); fs.writeFileSync(indexPath, exportStatements); console.log('Export statements written to index.ts');