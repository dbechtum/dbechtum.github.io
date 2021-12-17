var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
const inputs = document.querySelectorAll(".imageModInput");
const orientationInput = document.getElementsByName("orientation");
const sizeInput = document.getElementsByName("size");
context.globalAlpha=1;
let scale = 1;
canvas.width = "1000";
canvas.height = "720";
context.scale(scale, scale);

// Poster
var imageObj1 = new Image();
imageObj1.onload = function() {
    context.drawImage(imageObj1, 421, 152, 158, 224);
};
imageObj1.src = '/assets/images/SpaceX_Poster_Example.png';


// Livingroom
var imageObj2 = new Image();
imageObj2.onload = function() {
    context.drawImage(imageObj2, 0, 0, canvas.width, canvas.height);
};
imageObj2.src = '/assets/images/livingroom_large_p.png';

function setImages(xOffset, yOffset, xSize, ySize, backgroundImg){
    context.clearRect(0,0,canvas.width,canvas.height);
    imageObj2.src = backgroundImg;
    context.drawImage(imageObj1, xOffset, yOffset, xSize, ySize);
    context.drawImage(imageObj2, 0, 0, canvas.width, canvas.height);

}

for(let input of inputs){
    input.addEventListener('input', () => {
        let currentSize;
        let currentOrientation;
        for(let size of sizeInput){
            if(size.checked){
                currentSize = size.value;
            }
        }
        for(let orientation of orientationInput){
            if(orientation.checked){
                currentOrientation = orientation.value;
            }
        }
        if(currentOrientation === "L"){
            switch(currentSize) {
                case "L":
                    setImages(388, 185, 224, 158, '/assets/images/livingroom_large_l.png');
                    break;
                case "M":
                    setImages(418, 206, 164, 116, '/assets/images/livingroom_medium_l.png');
                    break;
                default:
                    setImages(445, 225, 110, 78, '/assets/images/livingroom_small_l.png');
            }
        } else {
            switch(currentSize) {
                case "L":
                    setImages(421, 152, 158, 224, '/assets/images/livingroom_large_p.png');
                    break;
                case "M":
                    setImages(442, 182, 116, 164, '/assets/images/livingroom_medium_p.png');
                    break;
                default:
                    setImages(461, 209, 78, 110, '/assets/images/livingroom_small_p.png');
            }
        }
});
}