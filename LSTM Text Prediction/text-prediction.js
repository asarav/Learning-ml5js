let charRNN;
let textInput;
let runningInference = false;

function setup() {
  charRNN = ml5.charRNN('hemingway/', modelReady);

  textInput = select('#textInput');
  textInput.input(generate);
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function generate() {
 if(!runningInference) {
   runningInference = true;

    select('#status').html('Generating...');

    let original = textInput.value();
    let txt = original.toLowerCase();

    if (txt.length > 0) {
      let data = {
        seed: txt,
        temperature: 0.8,
        length: 10
      };

      charRNN.generate(data, gotData);

      function gotData(err, result) {
        select('#status').html('Ready!');
        select('#original').html(original);
        select('#prediction').html(result.sample);
        runningInference = false;
      }
    } else {
      select('#original').html('');
      select('#prediction').html('');
      runningInference = false;
    }
  }
}