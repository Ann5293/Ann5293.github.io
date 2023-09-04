//quote animation
function splitWords() {
    let quote = document.querySelector("blockquote");
    quote.innerText.replace(/(<([^>]+)>)/ig,"");
    quotewords = quote.innerText.split(" "),
    wordCount = quotewords.length;
    quote.innerHTML = "";
    for (let i=0; i < wordCount; i++) {
      quote.innerHTML += "<span>"+quotewords[i]+"</span>";
      if (i < quotewords.length - 1) {
        quote.innerHTML += " ";
      }
    }
    quotewords = document.querySelectorAll("blockquote span");
    fadeWords(quotewords);
}
  
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
  
function fadeWords(quotewords) {
  Array.prototype.forEach.call(quotewords, function(word) {
    let animate = word.animate([{
      opacity: 0,
      filter: "blur("+getRandom(2,5)+"px)"
    }, {
      opacity: 1,
      filter: "blur(0px)"
    }], 
    { 
      duration: 2000,
      delay: getRandom(500,3300),
      fill: 'forwards'
    } 
    )
  })
}
splitWords();

var age = new Date().getFullYear() - 1997;  