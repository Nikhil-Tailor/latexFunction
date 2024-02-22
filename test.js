function itemize(text) {
    returnText = '\\begin{itemize}';
    text.split('\n').forEach(function (line) {
            returnText += '\n\\item ' + line;
        }
    );
    returnText += '\n\\end{itemize}';

    return returnText;
}

console.log(itemize('Eventbrite\n' +
    'Meetup\n' +
    'Barclays Eagle Labs\n' +
    'Tech Solent\n'));