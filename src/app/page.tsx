import './globals.css'; import ToDo from './ToDo'; import PropsToCompExample from './PropsToCompExample';
export default function App() { return ( <div className="flex justify-center items-center h-screen">
  <div className="border border-black p-1"><h1 className="text-2xl">ToDo.tsx</h1><ToDo /></div><div className="p-1"></div>
  <div className="border border-black p-1"><h1 className="text-2xl">PropsToCompExample.tsx</h1><PropsToCompExample /></div>
</div>); }