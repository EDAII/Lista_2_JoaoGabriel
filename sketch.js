let img;
let function_img;
let index = 0;

function preload() {
    img = loadImage("as1.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight - 40);

    img_a = createImage(img.width, img.height);
    img_a = img.get();

}

function draw() {
    background(255);
    fill(0);
    textFont('monospace');
    textSize(25);
    text("Selection Sort \n based on hue", 400, 200);
    fill(0);
    selection_sort(img_a)
}

function selection_sort(function_img) {
    function_img.loadPixels();
        let k = -1;
        let selectedPixel = index;
        for (let j = index; j < function_img.pixels.length; j += 4) {
            let pix = color(function_img.pixels[j], function_img.pixels[j + 1], function_img.pixels[j + 2], function_img.pixels[j + 3]);
            let b = hue(pix);
            if (b > k) {
                selectedPixel = j;
                k = b;
            }
        }
        var temp = []
        for (let i = 0; i < 4; i++) {
            temp[i] = function_img.pixels[index + i]
            function_img.pixels[index + i] = function_img.pixels[selectedPixel + i]
            function_img.pixels[selectedPixel + i] = temp[i]
        }

        if (index < function_img.pixels.length - 1) {
            index += 4;
        }
    function_img.updatePixels();
    image(function_img, 50, 50);
}