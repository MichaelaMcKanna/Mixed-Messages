
generateRandomNumber = (num) => Math.floor(Math.random()*num);

const wordsOfWisdom = {
leafArray: 
[   'If you realized how powerful your thoughts are, you would never think a negative thought.',
    'Our brains are made for love. Not fear. Not performance. Not aggression. But LOVE.',
    'Multitasking is a persistent myth. Paying deep, focused attention to one task at a time is the correct way.',
    'Use your mind to create your mind.',
    'If you do not shape your mind, your life will shape it for you.'],
    
petersonArray: 
[   'Don\'t compare yourself with other people; compare yourself with who you were yesterday.',
    'The truth is something that burns. It burns off dead wood. And people don\'t like having the dead wood burnt off, often because they\'re 95 percent dead wood.',
    'It is more difficult to rule yourself than to rule a city.',
    'I have a hard time figuring out what kind of box to put me in, too, because I don\'t know exactly what\'s going on around me or why. But I need to stay outside of boxes because then I can look at what\'s inside of them without being part of them.',
    'Justify your existance.'],

doyleArray: 
[   'You are not supposed to be happy all the time. Life hurts and it’s hard. Not because you’re doing it wrong, but because it hurts for everybody. Don’t avoid the pain. You need it. It’s meant for you. Be still with it, let it come, let it go, let it leave you with the fuel you\’ll burn to get your work done on this earth.',
    'When her pain is fresh and new, let her have it. Don\’t try to take it away. Forgive yourself for not having that power. Grief and pain are like joy and peace; they are not things we should try to snatch from each other. They\’re sacred. They are part of each person’s journey. All we can do is offer relief from this fear: I am all alone. That\’s the one fear you can alleviate.',
    'If our goal is to be tolerant of people who are different than we are, then we really are aiming quite low. Traffic jams are to be tolerated. People are to be celebrated.',
    'I understand now that I’m not a mess, but a deeply feeling person in a messy world. I explain that now, when someone asks me why I cry so often: "For the same reason I laugh so often – because I\’m paying attention."',
    'If you feel something calling you to dance or write or paint or sing, please refuse to worry about whether you\’re good enough. Just do it. Be generous. Offer a gift to the world that no one else can offer: yourself.'
] 
}
generateMessage = () =>{
let collectiveWisdom = [];

for (let author in wordsOfWisdom){
    let index = generateRandomNumber(wordsOfWisdom[author].length);
switch (author){
    case 'leafArray':
        collectiveWisdom.push(`Dr. Caroline Leaf would say "${wordsOfWisdom[author][index]}"`);
    break
    case 'petersonArray':
        collectiveWisdom.push(` Jordon Peterson would say "${wordsOfWisdom[author][index]}"`);
    break
    case 'doyleArray':
        collectiveWisdom.push(` Glennon Doyle would say "${wordsOfWisdom[author][index]}"`);
    break
    default:
        collectiveWisdom.push('nothing');        
}
}
return `If you need a pick-me-up then remember: ${collectiveWisdom}`
} 

console.log(generateMessage());