function convertText() {
    let inputText = document.querySelector('#input').value;
    let outputText = itemize(inputText);
    document.querySelector('#output').value = outputText;
}

function itemize(text) {
    let items = text.split('\n').map(line => `\\item ${line}`).join('\n');
    return `\\begin{itemize}\n${items}\n\\end{itemize}`;
}
