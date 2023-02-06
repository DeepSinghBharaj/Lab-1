let textForParagraph = "I am a major lover of romance books, particularly those set in the 1980s and 1990s.Pride and Prejudice, Gone with the Wind, and other classic classics are among my favourites.Apart from this, history fascinates me; Mitrokhin Archive is one of my favourites in this category.When I'm feeling low, I read books like Geronimo Stilton because they're entertaining.You should give it a go sometime.\n Let's move on to sports, and F1 is my favourite. I could go on and on about it for years and years and years. I've been watching it since I was eight years old, and I'm now twenty. It's been over a decade, and it's my method of escaping reality outside of the gym.\n I also enjoy hip - hop.I enjoy it because I feel like it talks to me, and a few songs have a different impact on me.Hip - hop is a music genre in which emotions are expressed via lyrics.You may just listen to them and empathize with them.When I say hip - hop, I don't mean musicians like Lil Jay or others; I mean artists like Eminem, Dr. Dre, Tupac, G-eazy, and others.";

let paragraph = document.createElement('p');
let paragraphText = document.createTextNode(textForParagraph);

paragraph.appendChild(paragraphText);

let paragraphElement = document.getElementById('paragraph');
paragraphElement.appendChild(paragraph);

console.log('check');





let interests = document.getElementById('products');
interests.innerHTML = "Interests";