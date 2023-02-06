// Author : Deep Singh Bharaj
// Student ID: 100819279
// Date Completed: 6th February 2023
// Resources used: 1.Nav Bar: https://getbootstrap.com/docs/4.0/components/navbar/

// Changing Products to Interests in Nav Bar.
let interests = document.getElementById('products');
interests.innerHTML = "Interests";

// Paragraph for Interests Page.
let textForParagraph = "I am a major lover of romance books, particularly those set in the 1980s and 1990s.Pride and Prejudice, Gone with the Wind, and other classic classics are among my favourites.Apart from this, history fascinates me; Mitrokhin Archive is one of my favourites in this category.When I'm feeling low, I read books like Geronimo Stilton because they're entertaining.You should give it a go sometime.\n Let's move on to sports, and F1 is my favourite. I could go on and on about it for years and years and years. I've been watching it since I was eight years old, and I'm now twenty. It's been over a decade, and it's my method of escaping reality outside of the gym.\n I also enjoy hip - hop.I enjoy it because I feel like it talks to me, and a few songs have a different impact on me.Hip - hop is a music genre in which emotions are expressed via lyrics.You may just listen to them and empathize with them.When I say hip - hop, I don't mean musicians like Lil Jay or others; I mean artists like Eminem, Dr. Dre, Tupac, G-eazy, and others.";

// Heading for Home Page.
let paragraphHeading = "Welcome to my website!";

// Description for Home Page.
let indexParagraph = "Hello! Deep Bharaj is my name. This is my Lab 1 webpage, and I welcome you to it.";

// Heading for Services Page.
let servicesHeading = "Services we offer here: ";

// Paragraph for About Us Page.
let aboutParagraph = "Hello, my name is Deep and I am a foreign student. I have two dogs, a beagle (4 years old) and a Doberman (14 years old), and I miss them both terribly. Every time I phone home and they see me, they begin licking the screen. But I don't generally do that because it makes them weep, and it makes me cry since I've spent half my life with them and now I can't see or touch them. Moving overseas has not been simple; there have been many challenges, tension, despair, and so on. To keep up, I spend half my time in class and the other half in the gym. I began working out casually and had no idea that I would grow addicted to it and that it would become the most important thing in my life, but it did. Along with academics, the gym is the most essential thing in my life. It's more akin to therapy. I'm happy while I'm lifting weights. Aside from that, I am a tremendous Formula One enthusiast, and I could speak about it for hours. I've been watching it since I was eight years old, and I'm going to turn 21. This is my entire existence; I may appear to be a dull person because all I do is study and exercise, but I thoroughly like what I do. But, at the end of the day, no matter what I do, I miss home and the warmth of my parents.";

// List items for Services Page.
let listItem1 = `Custom Programming.`
let listItem2 = `Website Development & Maintenance.`
let listItem3 = `Database Creation & Maintenance.`

// Repository link for Services Page.
let repositoryLink = `https://github.com/DeepSinghBharaj`;

// This block of code would only work if user is on Home Page.
if (window.location.href == "http://127.0.0.1:5500/Lab%201/index.html") {

    // Creates a h2 element with text node and appends it to heading.
    let heading = document.createElement('h2');
    let headingText = document.createTextNode(paragraphHeading);
    heading.appendChild(headingText);

    // Appends the element with text node to the div-index section on home page.
    let headingElement = document.getElementById('div-index');
    headingElement.appendChild(heading);

    // Creates a p element with text node and appends it to the paragraph.
    let paragraph = document.createElement('p');
    let paragraphText = document.createTextNode(indexParagraph);
    paragraph.appendChild(paragraphText);

    // Appends the element with text node to the div-index section on home page.
    let paragraphElement = document.getElementById('div-index');
    paragraphElement.appendChild(paragraph);

}

// This block of code would only work if user is on Products Page.
if (window.location.href == "http://127.0.0.1:5500/Lab%201/products.html") {

    // Creates a p element with text node and appends it to the paragraph.
    let paragraph = document.createElement('p');
    let paragraphText = document.createTextNode(textForParagraph);
    paragraph.appendChild(paragraphText);

    // Creates an img element and sets the attributes of the img.
    let gwtwPicture = document.createElement(`IMG`);
    gwtwPicture.setAttribute("src", "./images/gwtw.jpg");
    gwtwPicture.setAttribute("width", "20%");
    gwtwPicture.setAttribute("height", "20%");
    gwtwPicture.setAttribute("alt", "Gone with the wind");

    // Creates an img element and sets the attributes of the img.
    let papPicture = document.createElement(`IMG`);
    papPicture.setAttribute("src", "./images/pap.jpg");
    papPicture.setAttribute("width", "20%");
    papPicture.setAttribute("height", "20%");
    papPicture.setAttribute("alt", "Pride and Prejudice");

    // Creates an img element and sets the attributes of the img.
    let f1Picture = document.createElement(`IMG`);
    f1Picture.setAttribute("src", "./images/f1.jpg");
    f1Picture.setAttribute("width", "20%");
    f1Picture.setAttribute("height", "20%");
    f1Picture.setAttribute("alt", "Formula 1");

    // Appends the paragraph and the images to the paragraph section of the Interests page.
    let paragraphElement = document.getElementById('paragraph');
    paragraphElement.appendChild(paragraph);
    paragraphElement.appendChild(gwtwPicture);
    paragraphElement.appendChild(papPicture);
    paragraphElement.appendChild(f1Picture);

}

// This block of code would only work if user is on Services Page.
if(window.location.href == "http://127.0.0.1:5500/Lab%201/services.html"){

    // Creates a h2 element with text node and appends it to heading.
    let heading = document.createElement('h2');
    let headingText = document.createTextNode(servicesHeading);
    heading.appendChild(headingText);

    // Appends the heading element to the div-services section of the services page.
    let headingElement = document.getElementById('div-services');
    headingElement.appendChild(heading);

    // Creates an ordered list element.
    let orderedList = document.createElement('ol');

    // Creates the first list item, along with a text node and appends it to the ordered list. The following code does the same.
    let listItems1 = document.createElement('li');
    let listText1 = document.createTextNode(listItem1);
    listItems1.appendChild(listText1);
    orderedList.appendChild(listItems1);

    let listItems2 = document.createElement('li');
    let listText2 = document.createTextNode(listItem2);
    listItems2.appendChild(listText2);
    orderedList.appendChild(listItems2);

    let listItems3 = document.createElement('li');
    let listText3 = document.createTextNode(listItem3);
    listItems3.appendChild(listText3);
    orderedList.appendChild(listItems3);

    // In addition to the above code, this just sets the anchor tag and its attributes and appends it to the list.
    let listItems4 = document.createElement('li');
    let anchorTag = document.createElement('a');
    let anchor = document.createTextNode('Git Hub Repository');
    anchorTag.setAttribute('href',repositoryLink);
    anchorTag.appendChild(anchor);
    let linkText = document.createTextNode("Git Link: ");
    listItems4.appendChild(linkText);
    listItems4.appendChild(anchorTag);
    orderedList.appendChild(listItems4);

    let paragraphElement = document.getElementById('div-services');
    paragraphElement.appendChild(orderedList);

}

// // This block of code would only work if user is on About Page.
if(window.location.href == "http://127.0.0.1:5500/Lab%201/about.html"){

    // Creates a paragraph element along with the text node and appends the text node to the element.
    let paragraph = document.createElement('p');
    let paragraphText = document.createTextNode(aboutParagraph);
    paragraph.appendChild(paragraphText);

    // This creates a img element and sets its attributes. The following code does the same.
    let myPicture = document.createElement(`IMG`);
    myPicture.setAttribute("src", "./images/me.jpg");
    myPicture.setAttribute("width", "20%");
    myPicture.setAttribute("height", "20%");
    myPicture.setAttribute("alt", "That is Me");

    let beaglePicture = document.createElement(`IMG`);
    beaglePicture.setAttribute("src", "./images/oscar.jpg");
    beaglePicture.setAttribute("width", "20%");
    beaglePicture.setAttribute("height", "20%");
    beaglePicture.setAttribute("alt", "This is my Beagle");

    let juliePicture = document.createElement(`IMG`);
    juliePicture.setAttribute("src", "./images/julie.jpg");
    juliePicture.setAttribute("width", "20%");
    juliePicture.setAttribute("height", "20%");
    juliePicture.setAttribute("alt", "This is my Doberman");

    // This appends the above images and paragraph to the div-about section of about page.
    let paragraphElement = document.getElementById('div-about');
    paragraphElement.appendChild(paragraph);

    paragraphElement.appendChild(myPicture);
    paragraphElement.appendChild(beaglePicture);
    paragraphElement.appendChild(juliePicture);

    console.log('check');
    console.log(textForParagraph);


}

// This gets the ul and stores it in the list variable.
let list = document.getElementsByTagName(`ul`)[0];

// This creates an li element with the text node.
let humanElement = document.createElement('li');
let elementText = document.createTextNode(`Human Resources`);

// This appends the li element and inserts it before the 3rd index in the list.
humanElement.appendChild(elementText);
list.insertBefore(humanElement, list[3]);

// Time out function that redirects the user to the home page after they click on submit button.
function timedRedirect(e){
    e.preventDefault();
    e.stopPropagation();

    // This gets the information of the user and stores it in the variables.
    let contactName = document.getElementById(`nameUser`).value;
    let contactNumber = document.getElementById(`contactNumber`).value;
    let contactEmail = document.getElementById(`contactEmail`).value;
    let contactMessage = document.getElementById(`contactMessage`).value;

    // This prints the users information in the console.
    console.log("Name: " + contactName + "\nEmail: " + contactEmail + "\nMessage: " + contactMessage)

    // This is a function that would redirect the user to the home page after 3 seconds.
    setTimeout(function() {window.location.href = "index.html";},3000)
}

let submitButton = document.getElementById(`submitButton`);

// If the user clicks on submit button, they would be redirected to the home page. This uses event listener for it.
if (submitButton) {
    submitButton.addEventListener("click", timedRedirect, false);
}











