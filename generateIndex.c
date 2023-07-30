#include <stdio.h>
int main() {
    const char* c[] = {"TaskList", "PropsToCompExample", "ConditionalRenderingExample", "RenderingListsExample", "PureComponent"};
    FILE* f = fopen('./src/app/index.ts', 'w'); for (int i = 0; i < sizeof(c)/sizeof(c[0]); i++) fprint(f, 'export { default as %s } from './%s';', c[i], c[i]); 
    fclose(f); return 0;
}