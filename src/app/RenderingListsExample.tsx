import Image from 'next/image';
interface Person { id: number, name: string, profession: string, accomplishments: string, imgId: string } 
export const people: Person[] = [ 
    { id: 0, name: 'x x', profession: 'x', accomplishments: 'x', imgId: 'an' },  { id: 1, name: 'y y', profession: 'z', accomplishments: 'q', imgId: 'xn' }, 
	{ id: 2, name: 's y', profession: 'f', accomplishments: 'q, fd', imgId: 'qn' } 
]
export default function List() { return <article><h1 className="text-xl">x certain type of people</h1><ul>{people.map(({ id, name, profession, accomplishments, imgId }) => (
    <li key={id}><Image src={`/${imgId}.jpg`} alt={name} width={100} height={100} /><p><b>{name}</b> {profession} known for {accomplishments}</p></li>
) )}</ul></article>}