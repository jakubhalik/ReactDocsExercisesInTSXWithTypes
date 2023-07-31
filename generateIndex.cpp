# include <fstream>
int main() {
    for (const char* comp: {"TaskList", "PropsToCompExample", "ConditionalRenderingExample", "RenderingListsExample", "PureComponent"})
    std::ofstream("./src/app/index.ts", std::ios_base::app) << "export { default as " << comp << " } from './'" << comp << ";";
}