function arrayRepeaded<T>(...users: T[]): T[] {
    return users.reverse();
}

const friendS = arrayRepeaded('istiak', 'fahim', 'rahman', 'hayat');

console.log(friendS); 