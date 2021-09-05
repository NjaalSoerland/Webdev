const XPos = [];
const YPos = [];
const svgElements = [];
const can = $('#canvasPainting');
const canvas = can[0]
const ctx = canvas.getContext('2d');

let length = 27;
for (let n = 1; n < length+1; n++){
    XPos.push(0);
    YPos.push(0);
    svgElements.push("m"+n.toString());
}

let counter = 0;

function mouseLocation(e) {
    counter++;
    if (counter == 10){
        counter = 0;
        clear();
    }

    let currentX = parseInt(e.clientX);
    let currentY = parseInt(e.clientY);

    XPos.pop();
    XPos.unshift(currentX);

    YPos.pop();
    YPos.unshift(currentY);

    for (let i = 21; i > 0; i--) {
        let part = new Image();
        part.src = "../o1/media/images/moray/moray" + i.toString() + ".svg";
        part.onload = function () {
            ctx.drawImage(part, XPos[i] - can.offset().left-can.width()/2, (YPos[i]/can.height())*150-50, 250, 100);
        };
    }

    for (let index = 0; index < length; index++) {
        $('#'+svgElements[index]).css({"top":(YPos[index]-250).toString(), "left": (XPos[index]-250).toString()});
    }

}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function showDocumentation() {
    let doc = $('#documentation');
    let button = $('#docHeader')[0];
    if (doc.height() == 0) {
        doc.css("height", "auto");
        button.innerHTML = "<h3>Klikk her for å skjule dokumentasjon</h3>"
    }
    else {
        doc.css("height", "0");
        button.innerHTML= "<h3>Klikk her for å vise dokumentasjon</h3>"
    }

}
