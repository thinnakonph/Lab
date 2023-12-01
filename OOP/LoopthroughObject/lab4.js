let userObject = {};

while (true) {
    let key = prompt('Enter a key (or type "stop" to finish):');
    
    if (key.toLowerCase() === 'stop') {
        break;
    }

    let value = prompt(`Enter the value for key "${key}":`);
    userObject[key] = value;
}

console.log(userObject);
