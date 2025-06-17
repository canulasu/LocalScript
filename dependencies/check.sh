if command -v python3 &> /dev/null; then
    echo "Python3 Installed"
else
    echo "E: PYTHON NOT INSTALLED"
    exit
fi
if command -v node &> /dev/null; then
    echo "Node Installed"
else
    echo "E: NODE NOT INSTALLED"
    exit
fi
if command -v pyinstaller &> /dev/null; then
    echo "Pyinstaller Installed"
else
    echo "E: PYINSTALLER NOT INSTALLED"
    exit
fi
if command -v pip3 &> /dev/null; then
    echo "pip3 Installed"
else
    echo "E: PIP3 NOT INSTALLED"
    exit
fi

echo "All Dependencies are Present in This System"