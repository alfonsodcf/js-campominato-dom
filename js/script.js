function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max -min) + min);
}

const BOMB_NUMBER = 16;
let bombs = [];
let tentativi;
let tentativiEfetuati = 1;


function setLevel(){
    const level = document.getElementById("level").value;
    console.log('DifficoltÃ :', level);

    let numCol;
    switch (level) {
        case "1":
            default: //lo puoi metere anche alla fine
            numCol = 100;
        break;
        case "2":
            numCol = 81;
        break;
        case "3":
            numCol = 49;
        break;

           
    }
let numRige = Math.sqrt(numCol)
console.log("celle per lato: ", numRige )
generaGriglia(numCol, numRige); 
generateBomb(numCol)

}

function generateBomb (numCol){
    tentativi = numCol - BOMB_NUMBER
    while (bombs.length < BOMB_NUMBER) {
        let bombNumber = getRandomInt(1, numCol);
        if(!bombs.includes(bombNumber)){
            bombs.push(bombNumber)
        }
    }
    console.log(bombs)
}

    

function generaGriglia(numCol, numRige){
    console.log('numero celle:', numCol);
    const app = document.getElementById("app");
    app.innerHTML = '';
    let row = document.createElement("div");
    row.setAttribute("class", "cs-row");
    for(let i = 1; i <= numCol; i++){ //il ciclo serve a far si che la function generaCol si esegua tante volte quante il "numCol" 
        const col = generaCol(i, numRige); //nella parentesi scriviamo le cose da pasare alla function situata al difuori di quesat function
        row.append(col); //senza il return questa riga non funziona
    }
    app.append(row);
}

function generaCol(numCol, numRige){
    let col = document.createElement("div");
    col.setAttribute("class", "cs-col");
    col.style.width = `calc(100% / ${numRige})`;
    col.style.height = `calc(100% / ${numRige})`;
    col.classList.add("pointer");
    col.innerHTML = `<span>${numCol}</span>`;
    col.addEventListener('click', coloraCella);
    return col;
}

function coloraCella(){
    //console.log(this);
    let num = parseInt(this.innerText);
    if (bombs.includes(num)) {
        this.style.backgroundColor = 'red';
        //this.innerHTML = <img src./.....>
        //function gameOver()

    } else{
        this.style.backgroundColor = '#6495ed';
    }

    this.classList.remove("pointer")
    this.removeEventListener("click", coloraCella);
}


// function gameOver(){
//  let loser = document.createElement('h2')
//  loser.style.color = 'red';
//  loser.innerHTML= 'GAME OVER';

// }

document.getElementById("play").addEventListener("click", setLevel);






// function stampareGriglia() {
//     const colNumber = 64;
//     const colperRow = 8;
//     let app = document.getElementById('app');
//     let row = document.createElement('div');
//     row.setAttribute('class', 'row');
//     let cols = creaColonne(colNumber);
//     console.log(cols);
//     row.innerHTML = cols;
//     app.append(row);
// }


// function creaColonne(numerocolonne){
//     let cols = '';
//     let numeriusati = [];
//     while(numeriusati.length < 64){
//         let numeroCella = getRandomInt(0, 64);
//         if(!numeriusati.includes(numeroCella)){
//             numeriusati.push(numeroCella);
//             cols += `
//             <div class="col">${numeroCella}</div>
//             `;
//         }
       
//     }
//     return cols;
// };
// document.getElementById('generate').addEventListener('click', stampareGriglia);