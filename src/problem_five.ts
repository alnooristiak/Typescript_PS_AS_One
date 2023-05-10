function stringLong(str: unknown): void {
    if (typeof str === 'string') {
        console.log(str);
    } else {
        console.error('This is not a string. Try again Leater.');
    }
}

console.log(stringLong("al noor istiak Mahmud"));
console.log(stringLong("al noor istiak"));