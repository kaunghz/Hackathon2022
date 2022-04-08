
var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

recognition.onstart = function () {
    instructions.text ("Listening to the keyword of the shape...")
}

recognition.onspeechend = function () {
    instructions.text ("Say the keyword only, Try again!")

}

recognition.onerror = function () {
    instructions.text ("Voice Recognition ERROR!")
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
}

// start id click
$("#begin").click(function (event) {
    if (content.length) {
        content += ''
    }

    recognition.start()
})