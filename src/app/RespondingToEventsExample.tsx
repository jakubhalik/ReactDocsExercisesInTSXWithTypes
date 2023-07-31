export default function RespondingToEvents(): JSX.Element { return <ToolBar playMovie={() => alert('Playing')} uploadImage={() => alert('Uploading')} />; }
type ToolBarProps = { playMovie: () => void, uploadImage: () => void }; type ButtonProps = { onClick: () => void, children: React.ReactNode } 
function ToolBar({ playMovie, uploadImage }: ToolBarProps): JSX.Element 
    { return <div className="space-x-1 py-1"><Button onClick={playMovie}>Play movie</Button><Button onClick={uploadImage}>Upload image</Button></div>; }
function Button({ onClick, children }: ButtonProps): JSX.Element 
    { return <button className="rounded-lg bg-sky-400 hover:bg-sky-500 active:bg-sky-600 p-1 text-white" onClick={onClick}>{children}</button> }