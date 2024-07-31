let score = 0; 
let autoclick = false; 
let setInterval = 
function scoreCount() {
    score= score +1
    document.getElementById('score').textContent = score;
}

function autoclicker() {
    if (score >= 30) {
        autoclick = true;
         setInterval (() => {
            if (autoclick) {
                score = score + 1;
                document.getElementById('score').textContent = score;
            }
        }, 3000); 
      }
    } 