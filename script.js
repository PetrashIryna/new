// first parameter is font name
// second parameter is the path to the font file
// var junction_font = new FontFace('FuzzyBubbles', 'url(font/FuzzyBubbles-Bold.woff)');
// var junction_font = new FontFace('FuzzyBubbles', 'url(font/FuzzyBubbles-Bold.woff)', { style: 'bold', weight: 700 });
// junction_font.load().then(function(loaded_face) {
// 	document.fonts.add(loaded_face);
//   	document.body.style.fontFamily = 'FuzzyBubbles';
// }).catch(function(error) {
// 	// error occurred
// });
// const body = document.querySelector("body");
const header = document.createElement('header');
document.body.appendChild(header);
const text = document.createElement('p');
document.body.appendChild(text);
// document.body.write('<h2></h2>');

// const paragraph = document.body.appendChild(document.createElement('p'));
// const text = document.getElementsByTagName('p');
console.log(text)
var t = document.createTextNode("This just got added");
text.appendChild(t);
// text.appendChild(t);
text.innerHTML = 'someVar';
text.innerText = 'someData';
// // text.style.fontFamily = "FuzzyBubbles";
// t.node.innerText = "Hello world";
