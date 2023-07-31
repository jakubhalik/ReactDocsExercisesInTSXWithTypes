package main import "os"
func main() {
	c := []string{"TaskList", "PropsToCompExample", "ConditionalRenderingExample", "RenderingListsExample", "PureComponent"}
	f, _ := os.Create("./src/app/index.ts") for _, v := range c { f.WriteString("export { default as " + v + " } from './" + v + "';") }
}