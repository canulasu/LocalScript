import readline from 'readline';

export default class Output {

    input(text) {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve) => {
            rl.question(text, (answer) => {
                rl.close();
                resolve(answer);
            });
        });
    }

    print(text) {
        process.stdout.write(text);
    }

    println(text) {
        console.log(text);
    }
    
    clear() {
        console.clear();
        process.stdout.write('\x1Bc');
    }
}
