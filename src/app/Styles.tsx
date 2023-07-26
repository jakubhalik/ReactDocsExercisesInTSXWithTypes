import Border from './Border'; import Text2xl from './Text2xl'; import P1 from './P1';
interface StylesProps { name: string, children: React.ReactNode }
const Styles: React.FC<StylesProps> = ({ name, children }) => (<div><P1 /><Border><Text2xl>{`${name}.tsx`}</Text2xl>{children}</Border><P1 /></div>); export default Styles;