interface BorderProps { children: React.ReactNode }
export default function Border(props: BorderProps) { return <div className="border border-black p-1">{props.children}</div> }