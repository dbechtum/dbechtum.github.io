const imageInput = document.querySelector("#image_input");
const inputs = document.querySelectorAll(".imageModInput");
let uploadedImage;
var imageObj1 = new Image();
let ratio = 0;

imageInput.addEventListener('change', function() {
const reader = new FileReader();
reader.addEventListener('load', () => {
        uploadedImage = reader.result;
        console.log(reader);
        imageObj1.src = uploadedImage;
    });
    reader.readAsDataURL(this.files[0]);
    ratio = imageObj1.height / imageObj1.width;
    console.log(ratio);
    /*if(ratio < 1.39 && ratio > 1.387){
        showPoster(41, 41, 589, 818);
    } else {
        showPoster(0, 0, imageObj1.width, imageObj1.height);
    }*/
});

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.globalAlpha=1;
let scale = 1;
canvas.width = "536";
canvas.height = "720";
context.scale(scale, scale);
// Poster

imageObj1.onload = function() {
    ratio = imageObj1.height / imageObj1.width;
    // context.drawImage(imageObj1, 0, 0);
    // context.drawImage(imageObj2, 0, 0, 671, 900);
    showPoster();
};

function showPoster(dX, dY, dXSize, dYSize){
    context.clearRect(0,0,canvas.width/scale,canvas.height/scale);
    if(dX === undefined && dY === undefined && dXSize === undefined && dYSize === undefined){
        context.drawImage(imageObj1, 0, 0);
    } else {
        context.drawImage(imageObj1, 0, 0, imageObj1.width, imageObj1.height, dX, dY, dXSize, dYSize );
    }
    context.drawImage(imageObj2, 0, 0, canvas.width/scale, canvas.height/scale);
}

// Livingroom
var imageObj2 = new Image();
imageObj2.onload = function() {
    context.drawImage(imageObj2, 0, 0, canvas.width/scale, canvas.height/scale);
};
imageObj2.src = '/assets/images/image_ratio_preview.png';

for(let input of inputs){
    input.addEventListener('input', (e) => {
        showPoster(parseInt(inputs[0].value), //xOffset
            parseInt(inputs[1].value), //yOffset
            ((parseFloat(inputs[2].value).toFixed(2) * parseFloat(inputs[3].value).toFixed(2))*imageObj1.width), //xScale
            ((parseFloat(inputs[2].value).toFixed(2) * parseFloat(inputs[4].value).toFixed(2))*imageObj1.height)); //yScale
});
}