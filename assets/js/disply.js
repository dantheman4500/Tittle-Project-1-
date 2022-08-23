
const Songs = [
    "Heard 'Em Say - Kanye West", 
    "Les - Childish Gambino", 
    "Change - J. Cole", 
    "20 Something - SZA", 
    "Provider - Frank Ocean"];
    
    function generateListItems(arg) {
            let items = "";
            for(let i = 0; i < arg.length; i++) {
                items += `<li>${arg[i]}</li>`;
            }
            return items;
    }
    
    document.querySelector("main").innerHTML = `
    <ol>
    ${generateListItems(Songs)}
    </ol>
    `; 