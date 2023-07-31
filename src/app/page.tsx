'use client'; import './globals.css'; import Styles from './Styles'; import * as Components from './index'; import componentOrder from './components.json';
type ComponentType = React.FC; const orderedComponentNames = componentOrder as (keyof typeof Components)[];
export default function App() { return <div className="py-2 px-4">
    {orderedComponentNames.map((componentName, index) => { const Component: ComponentType = Components[componentName]; return <Styles key={index} name={Component.name}><Component /></Styles>; })}
</div>; }