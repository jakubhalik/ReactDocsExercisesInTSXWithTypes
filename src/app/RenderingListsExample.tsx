import Image from 'next/image';
interface Person { id: number, name: string, profession: string, accomplishments: string, imgId: string }
export const people: Person[] = [ { id: 0, name: 'x x', profession: 'x', accomplishments: 'x', imgId: 'an' },  { id: 1, name: 'y y', profession: 'z', accomplishments: 'q', imgId: 'xn' }, 
	{ id: 2, name: 's y', profession: 'f', accomplishments: 'q, fd', imgId: 'qn' }]
export function getImgUrl(person: Person) { return `/${person.imgId}.jpg`; }
export default function List() { const listItems = people.map(person => <li key={person.id}>
    <Image src={getImgUrl(person)} alt={person.name} width={100} height={100} /><p><b>{person.name}</b>{' ' + person.profession} known for {person.accomplishments}</p>
</li>); return <article><h1 className="text-xl">x certain type of people</h1><ul>{listItems}</ul></article> }