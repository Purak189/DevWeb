// Social Media Profile

// 1. User Information
const username = 'Purak';
const fullName = 'Jair Velasquez';
const age = 21;
const isStudent = true;

// 2. Adress
const Adress = {
    street: 'Capulies',
    city: 'Lima',
    state: 'Lima',
    zipCode: 169,
}

// 3. Hobbies
const hobbies = ['Coding', 'Gaming', 'Reading'];

// 4. Generating personalized bio
const bio = `Hello there!, My name is ${fullName}. But my friends tell me ${username}.
I'm ${age}. I live in ${Adress.city}.
I love ${hobbies.join(', ')}. Follow me for coding adventures`;

console.log(bio);