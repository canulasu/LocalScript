#!/bin/bash

echo "Please run the dependencies script before building this project."

sleep 1

cd ..
cd source
pyinstaller --onefile local.py
rm local.spec
rm -rf build
mv dist/local .
rmdir dist
mv local ..
cd ..
mkdir bin
mv local bin

cd bin
cp ../source/os.js .
cp ../source/time.js .
cp ../source/output.js .
cd ..

echo "LocalScript compiled. Results can be found in: /localscript-main/bin"
