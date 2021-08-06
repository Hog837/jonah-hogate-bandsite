const shows = [
    {
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    }, {
        date: 'Tue Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    }, {
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
    }, {
        date: 'Sat Nov 06 2021',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA'
    },{
        date: 'Sat Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
    }, {
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA'
    }
];

console.log('hello')

let main = document.querySelector('main')

let section = document.createElement('section__shows');

for (let i = 0; i < shows.length; i++){
    let row = document.createElement('div');   

    let p1 = document.createElement('P');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    let text1 = document.createTextNode(shows[i].date);
    let text2 = document.createTextNode(shows[i].venue);
    let text3 = document.createTextNode(`${shows[i].location.city}, ${shows[i].location.state}`);
    let button = document.createElement('button')
    let buttonContent = document.createTextNode('Buy Tickets');
    button.appendChild(buttonContent);

    p1.appendChild(text1);
    p2.appendChild(text2);
    p3.appendChild(text3);
    row.appendChild(p1);
    row.appendChild(p2);
    row.appendChild(p3);
    row.appendChild(button);

    section.appendChild(row);
}

main.appendChild(section);
