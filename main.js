let score = 0; 
let autoclick = false; 
let doubleclick = false; 

function scoreCount() { 
    if (doubleclick == false) {
    score = score + 1
    document.getElementById('score').textContent = score;
} else if (doubleclick == true) {
const button2 = document.getElementById('doubleclicker');
button2.textContent = 'Sold out!';
score = score + 2
document.getElementById('score').textContent = score;
}
} 

function doubleclicker() {
    if (score >= 1000) {
        score = score - 1000;
        doubleclick = true; 
      }
      else {
        alert ("not enough money honey, you broke son"); 
      }
    } 


    
    function autoclicker() {
        if (score >= 200) {
            score = score - 200; 
        autoclick = true;
         setInterval (() => {
            if (autoclick) {
                score = score + 1;
                document.getElementById('score').textContent = score; 
                const button1 = document.getElementById('autoclicker');
                button1.textContent = 'Sold out!';
            }

        }, 5000); 
      }
      else {
        alert ("broke bud, you need money."); 
      }
    } 
    
    
 