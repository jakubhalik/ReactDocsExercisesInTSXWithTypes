function Item({ name, isPacked }) { return <li>{name} {isPacked && '✔'}</li> }
export default function PackingList() { return (<section>
    <h1 className="text-xl">Heading about the list</h1>
    <ul><Item isPacked={true} name="xItem" /><Item isPacked={true} name="yItem" /><Item isPacked={false} name="zItem" /></ul>
</section>); }