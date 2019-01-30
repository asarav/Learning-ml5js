//A modified version of the image classification example provided by ml5 that cycles through multiple images.

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
const classifier = ml5.imageClassifier('MobileNet', modelReady);

// A variable to hold the image we want to classify
let img;

let imageList = ['images/cat.jpg', 'images/dog.jpg', 'images/nyan-cat.jpg', 'images/falcon-heavy.jpg', 'images/trollface.png', 'images/goose.jpg', 'images/elon-musk.jpg', 'images/hotdog.jpg']
let listCounter = 1;

function setup() {
  noCanvas();
  // Load the image
  img = createImg('images/cat.jpg', imageReady);
  img.size(400, 400);
}

function nextImage() {
    console.log('Next Image');
    console.log(img);
    img.elt.parentNode.removeChild(img.elt);
    img = createImg(imageList[listCounter], imageReady);
    img.size(400, 400);
    listCounter++;
    if(listCounter >= imageList.length) {
        listCounter = 0;
    }
}

// Change the status when the model loads.
function modelReady(){
  select('#status').html('Model Loaded')
}

// When the image has been loaded,
// get a prediction for that image
function imageReady() {
  classifier.predict(img, gotResult);
  // You can also specify the amount of classes you want
  // classifier.predict(img, 10, gotResult);
}

// A function to run when we get any errors and the results
function gotResult(err, results) {
  // Display error in the console
  if (err) {
    console.error(err);
  }

  console.log(results);

  // The results are in an array ordered by probability.
  select('#result1').html(results[0].className);
  select('#probability1').html(nf(results[0].probability, 0, 2));

  if(results[1]) {
      select('#result2').html(results[1].className);
      select('#probability2').html(nf(results[1].probability, 0, 2));
  }

  if(results[2]) {
    select('#result3').html(results[2].className);
    select('#probability3').html(nf(results[2].probability, 0, 2));
}
}