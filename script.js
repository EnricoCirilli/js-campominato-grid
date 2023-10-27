


// creo una griglia di 100 numeri 10x 10

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
       
// seleziono una  singola cella che cambia colore al click

        let divs = document.querySelectorAll(".grid-item");
        const changeBackgroundColor = e => {
            e.target.style.backgroundColor = "lightblue";
            
        }
        divs.forEach(div => {
            div.addEventListener("click", changeBackgroundColor, { once: true });
        })
    };

};



makeRows(10, 10);




