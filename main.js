let score = 0; 
let autoclick = false; 

function scoreCount() {
    score = score +1
    document.getElementById('score').textContent = score;
}



 
function autoclicker() {
        if (score >= 30) {
            score = score - 30; 
        autoclick = true;
         setInterval (() => {
            if (autoclick) {
                score = score + 1;
                document.getElementById('score').textContent = score;
            }
          
        }, 5000); 
      }
    } 

    function toggleDropdown() {
        let dropdown = document.getElementById("dropdownmenu");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }
   