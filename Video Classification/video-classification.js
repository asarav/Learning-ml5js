//A modified version of the video classification example provided by ml5 that cycles through multiple videos.

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the video we want to classify
let video;

let videoList = ['videos/Walking around Shibuya.mp4']
let listCounter = 1;

let button;
let playing = false;

function setup() {
  noCanvas();
  // Load the image
  video = createVideo('videos/Walking around Shibuya.mp4', setClassifier);
  button = createButton('Play');
  button.mousePressed(toggleVid); // attach button listener
  video.size(400, 400);
}

function setClassifier() {
  classifier = ml5.imageClassifier('MobileNet', video, videoReady);
}

function nextVideo() {
    console.log('Next Video');
    console.log(video);
    video.elt.parentNode.removeChild(video.elt);
    video = createVideo(videoList[listCounter], setClassifier);
    button.elt.parentNode.removeChild(button.elt);
    button = createButton('Play');
    button.mousePressed(toggleVid); // attach button listener
    video.size(400, 400);
    listCounter++;
    if(listCounter >= videoList.length) {
        listCounter = 0;
    }
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    video.pause();
    button.html('Play');
  } else {
    video.loop();
    button.html('Pause');
  }
  playing = !playing;
}

// When the video has been loaded,
// get a prediction for that video
function videoReady() {
  select('#status').html('Model Loaded')
  classifier.predict(gotResult);
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
  setTimeout(function() {classifier.predict(gotResult) }, 1000);
}