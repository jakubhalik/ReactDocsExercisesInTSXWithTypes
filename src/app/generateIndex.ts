const fs = require('fs');
const components = ['Task', 'PropsToCompExample', 'ConditionalRenderingExample', 'RenderingListsExample', 'PureComponent'];

let exportsStr = components
  .map(name => `export { default as ${name} } from './${name}.tsx';`)
  .join('\n');

fs.writeFileSync('./index.ts', exportsStr);
