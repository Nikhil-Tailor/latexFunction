function itemize(text) {
    let items = text.split('\n').map(line => `\\item ${line}`).join('\n');
    return `\\begin{itemize}\n${items}\n\\end{itemize}`;
}

console.log(itemize('Eventbrite\n' +
    'Meetup\n' +
    'Barclays Eagle Labs\n' +
    'Tech Solent'));