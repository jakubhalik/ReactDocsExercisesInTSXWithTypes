type Person = { name: string, imgId: string }
function getImgUrl(person: Person): string { return './' + person.imgId + '.ico'; }
interface CardProps { children: React.ReactNode }
function Card({ children }: CardProps) { return <div>{children}</div> }
interface AvatarProps { person: Person, size: number }
function Avatar({ person, size }: AvatarProps): JSX.Element { return <img src={getImgUrl(person)} alt={person.name} width={size} />; }
export default function Profile(): JSX.Element { return <Card><Avatar size={100} person={{ name: 'wName', imgId: 'favicon' }} /></Card>; }