import { execSync } from "child_process";
import fs from 'fs';
import { readFile } from 'fs/promises';
import fsPromises from "fs/promises";

export default class OS {

    system(command) {

        const output = execSync(command, { encoding: "utf-8" });
        console.log(output)
        return output
    }

    remove(filename) {
        fs.unlink(filename, (err) => {
            if (err) {
                return "E: Could not remove file"
            }
        })

        return filename
    }

    async detect() {
        const path = "/"

        let os = "Unknown"

        const files = await fsPromises.readdir(path);

            if (files.includes('tmp')) {
                if (files.includes('lib64')) {
                    if (files.includes('lib')) {
                        if (files.includes('boot')) {
                            os = "Linux";
                        }
                    }
                }
            }

            if (files.includes('Library')) {
                if (files.includes('System')) {
                    if (files.includes('Applications')) {
                        os = "macOS";
                    }
                }
            }

            if (files.includes('Windows')) {
                if (files.includes('Users')) {
                    if (files.includes('Program Files')) {
                        os = "Windows";
                    }
                }
            }

            if (files.includes('rescue')) {
                if (files.includes('libexec')) {
                    if (files.includes('compat')) {
                        os = "FreeBSD";
                    }
                }
            }

        return os
    }
    
    async read(filename) {
        try {
            const data = await readFile(filename, 'utf8');
            return data;
        } catch (err) {
            return "E: Error opening file"
        }
    }

    async write(filename, text) {
        try {
            const data = await readFile(filename, 'utf8');
            
            fs.writeFile(filename, data + text, err => {
                if (err) {
                    return "E: Could not write to file"
                } else {
                    return "File written"
                }
            });
    
        } catch (err) {
            return "E: Error opening file"
        }
    }
}
