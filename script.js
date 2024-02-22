function convertText() {
    let inputText = document.querySelector('#input').value;
    // Your conversion function goes here
    let outputText = itemize(inputText);
    document.querySelector('#output').value = outputText;
}

function itemize(text) {
    returnText = '\\begin{itemize}';
    text.split('\n').forEach(function (line) {
            returnText += '\n\\item ' + line;
        }
    );
    returnText += '\n\\end{itemize}';

    return returnText;
}
