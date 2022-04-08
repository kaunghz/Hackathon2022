/// AI Voice Recognition
/// Author - Kaung Htoo Zan + Alim
/// code followed on a youtube tutorial

var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

recognition.onstart = function () {
    instructions.text ("Listening to the keyword and the distance...")
}

recognition.onspeechend = function () {
    instructions.text ("Say the keyword and the distance only, Try again!")

}

recognition.onerror = function () {
    instructions.text ("No activity detected!")
}

recognition.onresult = function (event) {
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript

    content += transcript

    textbox.val(content)

    if (content.length > 10) {
        instructions.text ("Try again!")
        content=''
        textbox.val(content)
        recognition.stop();
    }   
    /// Alim*******
    // TO-DO:

    // my idea is navigating to your shape function based on the content
    // content is the text that user says
    content = content.toLowerCase().split(' ');
    if (content[0] == "turtle" || content[0] == "cross" || content[0] == "square") {
        var dist = parseInt(content[1]);
        if (dist)
            window.location.href = 'map.html#' + content[0] + '_' + dist;
        else
            window.location.href = 'map.html#' + content[0];
    }   else {
        if (content[0] == "free") {
            window.location.href = 'map.html';
        }
    }
}

// start id click
$("#begin").click(function (event) {
    if (content.length) {
        content += ''
    }

    recognition.start()
})