import argparse
import sys
import os

orange = "\033[38;5;208m"
orangeclose = "\033[0m"

parser = argparse.ArgumentParser(description="Localscript Executer")

parser.add_argument('-r', '--run', type=str, help='Run a LocalScript script')
parser.add_argument('-v', '--version', action='store_true', help='LocalScript version')

args = parser.parse_args()

def interpret(filename):
    try:
        open(filename, 'r')
    except:
        print('E: File does not exist.')
        sys.exit()

    if filename.endswith('.ls') or filename.endswith('.localscript'):
        pass
    else:
        print('E: Invalid file extension, LocalScript files need to be .ls')
        sys.exit()

    with open(filename, 'r') as file:
        document = file.readlines()

    for x in range(0, len(document)):
        document[x] = document[x].strip().replace('\n', '')

    with open('localscript.js', 'a') as target:

        target.write("import Time from './time.js'\n")
        target.write("import OS from './os.js'\n")
        target.write("import Output from './output.js'\n")
        target.write("const time = new Time();\n")
        target.write("const os = new OS();\n")
        target.write("const output = new Output();\n")

        target.write('function print(text) {\n')
        target.write('    process.stdout.write(text);\n')
        target.write('}\n')
        target.write('function println(text) {\n')
        target.write('    console.log(text);\n')
        target.write('}\n')

        for item in document:
            if '==' in item:
                target.write(item.replace('==', '===') + '\n')
            elif item.startswith('import '):
                content = item.replace('import ', '').strip()
                target.write(f"import {content} from '{content}.js'\n")
                target.write(f"const {content.lower()} = new {content}();\n")
            else:
                target.write(item + '\n')

    os.system('node localscript.js')
    os.remove('localscript.js')

if args.run:

    interpret(args.run)

elif args.version:
    print("LocalScript 0.7")

else:
    print('Welcome to LocalScript v0.7.')
    print('Transpiles to Node.js. Variables do not save.')
    while True:
        try:
            command = input(f'{orange}> {orangeclose}')

            with open('localscriptreplmodeinterpretedfile.ls', 'a') as file:
                file.write(command)
            interpret('localscriptreplmodeinterpretedfile.ls')
            os.remove('localscriptreplmodeinterpretedfile.ls')
        except KeyboardInterrupt:
            print('')
