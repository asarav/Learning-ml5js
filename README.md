# Learning-ml5js
Projects and tutorials in ml5js that are used to learn about and showcase different aspects of the library.

Because ml5js is still a very new library, they don't have many examples on their site. The accuracy of models tends to be rather low, and the library itself throws many errors when run within a browser.
If one of the examples in this repo extends functionality that is not provided in the ml5js examples or offers a better implementation, feel free to copy the code and use as you please.

Note: Unfortunately, some models do not seem to come with the ml5js cdn. I'm guessing it is most likely due to the file sizes of the models. If you want a pretrained model that does not come with the cdn, you will need to grab it from here. https://github.com/ml5js/ml5-data-and-models

If you want to train and save your own model, ml5js offers that functionality.

Current Examples:
* Image Classification: Runs through a folder of images and tries to identify what  is in the image.
* Image Classification with Upload: Tries to identify what is in the uploaded image.
* Video Classification: Tries to identify what is in the video.
* Pitch Detection: A guitar tuner that uses a microphone to determine whether your guitar is in tune. (Not offered by ml5js)
* LSTM Text Prediction: Tries to predict what text will follow the text you have written. Allows for switching between different authors and styles. Unlike the examples provided by the ml5js team, this actually runs correctly without any buggy behavior.
