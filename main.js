let score = 0; 
let autoclick = false; 


function scoreCount() {
    score = score +1
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
        }, 5000); 

      }
    } 


        while (autoclick == true) {
            function updateInterval() {
                if (score >= 2000 ) {
                    setInterval = 500;
                } else if (score >= 1000) {
                    setInterval = 1000; 
                }  else if (score >= 800) {
                    setInterval = 1500;
                } else if (score >= 500) {
                    setInterval = 2000;
                } else if (score >= 200) {
                    setInterval = 4500;
                } else {
                    setInterval = 5000;
                }
            }
            }

            
    
        