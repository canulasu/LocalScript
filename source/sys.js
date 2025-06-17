import fs from "fs/promises";

async function detect() {
    const path = "/"

    let os = "Unknown"

    const files = await fs.readdir(path);

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

    return os
}

console.log(await detect());