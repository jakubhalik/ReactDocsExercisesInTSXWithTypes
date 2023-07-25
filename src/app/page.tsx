import './globals.css'; import Styles from './Styles'; import ToDo from './ToDo'; import PropsToCompExample from './PropsToCompExample'; 
import ConditionalRenderingExample from './ConditionalRenderingExample'; import RenderingListsExample from './RenderingListsExample';
type Component = { [key: string]: React.FC; };
const Components: Component = { ToDo, PropsToCompExample, ConditionalRenderingExample, RenderingListsExample }
export default function App() { return Object.keys(Components).map(name => { const Component = Components[name]; return <Styles key={name} name={name}><Component /></Styles> }); }