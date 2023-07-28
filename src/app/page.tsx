import './globals.css'; import Styles from './Styles'; import * as Components from './index';
export default function App() { return <div className="py-2 px-4">{Object.values(Components).map((Component, index) => (<Styles key={index} name={Component.name}><Component /></Styles>))}</div>; }