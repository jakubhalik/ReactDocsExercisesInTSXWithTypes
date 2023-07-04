interface person { name: string, className: string, todo: ToDo } interface ToDo { first: string, second: string, third: string }
const person = { name: 'qName', className: 'bg-black', todo: { first: 'wToDo', second: 'eToDo', third: 'rToDo' } }
export default function ToDoList() { return (
    <div className={person.className + "text-white"}><h1 className="text-xl">{person.name}</h1><p>{person.todo.first}</p><p>{person.todo.second}</p><p>{person.todo.third}</p></div>
); }