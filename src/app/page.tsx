import './globals.css'; import Border from './Border'; import Text2xl from './Text2xl'; import P1 from './P1';
import ToDo from './ToDo'; import PropsToCompExample from './PropsToCompExample'; import ConditionalRenderingExample from './ConditionalRenderingExample';
export default function App() { return ( <div className="flex justify-center items-center h-screen">
  <Border><Text2xl>ToDo.tsx</Text2xl><ToDo /></Border><P1 /><Border><Text2xl>PropsToCompExample.tsx</Text2xl><PropsToCompExample /></Border><P1 />
  <Border><Text2xl>ConditionalRenderingExample.tsx</Text2xl><ConditionalRenderingExample /></Border><P1 />
</div>); }