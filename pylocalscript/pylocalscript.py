# Please note that this python3 library needs node.js and localscript installed and in path or bin

import os

def run(code):
    with open('pylocalscripttempfile.ls', 'a') as file:
        file.write(code)

    os.system('./local --run pylocalscripttempfile.ls')

    os.remove('pylocalscripttempfile.ls')

def execute(filename):

    os.system(f'./local --run {filename}')

    os.remove(filename)