import './globals.css'; import Styles from './Styles'; import ToDo from './ToDo'; import PropsToCompExample from './PropsToCompExample'; 
import ConditionalRenderingExample from './ConditionalRenderingExample'; import RenderingListsExample from './RenderingListsExample';
export default function App() { return (<>
  <Styles name="ToDo"><ToDo /></Styles><Styles name="PropsToCompExample"><PropsToCompExample /></Styles><Styles name="ConditionalRenderingExample"><ConditionalRenderingExample /></Styles>
  <Styles name="RenderingListsExample"><RenderingListsExample /></Styles>
</>); }