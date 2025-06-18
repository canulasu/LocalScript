# LocalScript

LocalScript is a language for local non web development applications. LocalScripts comes with more runtime libraries, some transpilation for more optimization, and compiles to native JavaScript to be later executed using Node.js. This language aims to make JavaScript more adequate and more powerful for easy and efficient backend programming.

## Operating Systems and Support

Currently, LocalScript works on any operating system which support the following dependencies:


* Node.js
* Python3
* Pip3 or pipx
* Pyinstaller

While this is true, our compile guide will now work on non Unix systems such as Microsoft Windows.

## How to compile
Since LocalScript is very early in development, is is a little bit messy and requires multiple steps to compile. Firstly, clone the GutHub repository to your local machine. Under the source directory in the github repo, there will be a file called local.py. Open this file in any text editor. Scroll down towards the end of the file. You should see this piece of code:

* target.write("import Time from './time.js'\n")
* target.write("import OS from './os.js'\n")
* target.write("import Output from './output.js'\n")
* target.write("const time = new Time();\n")
* target.write("const os = new OS();\n")
* target.write("const output = new Output();\n")

This code is meant for development. Please change this snippet in the main file to if you are using a Unix based system. We currently do not have a Windows compilation manual:

* target.write("import Time from '/usr/bin/time.js'\n")
* target.write("import OS from '/usr/bin/os.js'\n")
* target.write("import Output from '/usr/bin/output.js'\n")
* target.write("const time = new Time();\n")
* target.write("const os = new OS();\n")
* target.write("const output = new Output();\n")

This ensures that the development and runtime libraries are in the correct places. After doing this, save and exit the file. Back in the root of the repository, there will be a folder called build. In that directory, there is a script called build.sh. You should run this script. Before running, you need to have the following dependencies installed.

* Node.js
* Python3
* Pip3 or pipx
* Pyinstaller

You may check out the /dependencies directory in the repository for more information. After ensuring that all the tools are installed in the system, please run the script. Once the script is finished, you should see a directory within the core of the repository named "results" or "result". Please enter that directory. Place all of the files inside this directory to the /usr/bin directory in your system. You may need to use the mv tool in your console or terminal to achieve this.
