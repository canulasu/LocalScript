export default class Time {
    
    sleep(miliseconds) {
        return new Promise((resolve) => {
            setTimeout(resolve, miliseconds);
        });
    }

    time() {
        return Math.floor(Date.now() / 1000)
    }
}