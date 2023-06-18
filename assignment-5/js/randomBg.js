// random background color for cards
const cards = document.getElementsByClassName('card');

for(let card of cards){
    card.addEventListener('mouseenter', function(event){
        const color = generateRandomColor()
        event.target.style.background = color;
    });
    
}
//=================================================


