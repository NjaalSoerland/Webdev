const XPos = [];
const YPos = [];
const svgElements = [];
const canvas = document.getElementById('canvasPainting');
const ctx = canvas.getContext('2d');

let length = 27;
for (let n = 1; n < length+1; n++){
    XPos.push(0);
    YPos.push(0);
    svgElements.push("m"+n.toString());
}

let counter = 0;

function mouseLocation(event) {
    counter++;
    if (counter == 10){
        counter = 0;
        clear();
    }

    let currentX = parseInt(event.clientX-250);
    let currentY = parseInt(event.clientY-250);

    XPos.pop();
    XPos.unshift(currentX);

    YPos.pop();
    YPos.unshift(currentY);

    for (let i = 21; i > 0; i--) {
        let part = new Image();
        part.src = "../o1/media/images/moray/moray" + i.toString() + ".svg";
        part.onload = function () {
            ctx.drawImage(part, XPos[i] - $('#canvasPainting').offset().left + 50, (YPos[i] - $('#canvasPainting').offset().top) / 6
                , 250, 100);
        };
    }

    for (let index = 0; index < length; index++) {
        document.getElementById(svgElements[index]).style.top = YPos[index].toString();
        document.getElementById(svgElements[index]).style.left = XPos[index].toString();

    }

}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
