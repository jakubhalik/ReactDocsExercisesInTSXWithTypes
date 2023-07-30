import os; directory_path = './src/app'
components = [ 'TaskList', 'PropsToCompExample', 'ConditionalRenderingExample', 'RenderingListsExample', 'PureComponent' ]
export_statements = '\n'.join([f'export {{ default as { component } }} from \'./{component}\';' for component in components])
index_path = os.path.join(directory_path, 'index.ts')
with open(index_path, 'w') as index_file: index_file.write(export_statements); print('Export statements written in index.ts')