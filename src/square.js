
export const getSquare = () => {
    let square = document.createElement("div");
    square.style.width="200px";
    square.style.height="200px";
    square.style.backgroundColor="red";
    square.innerHTML = `<h1 style="color: white; text-align: center;">Wellcome</h2>`
    document.body.appendChild(square);
}
