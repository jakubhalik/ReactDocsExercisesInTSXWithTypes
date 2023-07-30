use std::fs;
fn main() { 
    let c = ["TaskList", "PropsToCompExample", "ConditionalRenderingExample", "RenderingListsExample", "PureComponent"]
    fs::write("./src/app/index.ts", c.iter().map(|comp| format!("export {{ default as {} }} from './{}';", comp, comp)).collect::<String>())
}