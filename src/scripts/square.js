import dragoSquare from '../assets/images/cyberdragosquare.jpg';
export const getSquare = () => {
    
    
    let square = document.createElement("div");
    console.log(square);
    square.style.width="200px";
    square.style.height="200px";
    square.style.backgroundColor="red";
    //square.appendChild(myDragoSquare);
    //square.setAttribute("id", "bg");
    square.innerHTML = `<h1 style="color: white; text-align: center;">Wellcome</h2>`
    document.body.appendChild(square);
}
getSquare();
console.log(dragoSquare);
const myDragoSquare = new Image();
    console.log(myDragoSquare);
    myDragoSquare.src = dragoSquare;
    myDragoSquare.alt = "Cyberdrago wins"
    console.log(myDragoSquare.src);
    console.log(myDragoSquare);
    document.body.appendChild(myDragoSquare);

    const fancyFunc = () => {
        return [1, 2];
      };
      
      const [a, b] = fancyFunc();

      console.log([a,b]);
