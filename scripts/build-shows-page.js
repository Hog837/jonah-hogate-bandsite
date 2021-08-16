const apiKey = 'https://project-1-api.herokuapp.com/showdates?api_key=c05d162e-b795-40f8-a99e-c8ecaaa5237c';
let shows;

// axios get request for the shows list
axios({
    method: 'get',
    url: apiKey
})
    .then((response) => {
        shows = response.data
        generateShowsList(shows);
        console.log(shows);
    })

const showsList = document.querySelector('.shows__list');

const generateShowsContent = (showData) => {

/*created section for shows*/
const showListSection = document.createElement('section');
showListSection.classList.add('shows__section');
showsList.appendChild(showListSection);

/*create dates section*/
const datesHeader = document.createElement('span');
datesHeader.classList.add('shows__headers');
datesHeader.innerText = 'DATES';
showListSection.appendChild(datesHeader);

const datesData = document.createElement('p');
datesData.classList.add('shows__data');
datesData.innerText = new Date(Number(showData.date)).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
}).split(',').join('');
showListSection.appendChild(datesData);

/*creates venue section*/
const venueHeader = document.createElement('span');
venueHeader.classList.add('shows__headers');
venueHeader.innerText = 'VENUE';
showListSection.appendChild(venueHeader);

const venueData = document.createElement('p');
venueData.classList.add('shows__data');
venueData.innerText = showData.place;
showListSection.appendChild(venueData);

/*create location section*/
const locationHeader = document.createElement('span');
locationHeader.classList.add('shows__headers');
locationHeader.innerText = 'LOCATION';
showListSection.appendChild(locationHeader);

const locationData = document.createElement('p');
locationData.classList.add('shows__data');
locationData.innerText = showData.location;
showListSection.appendChild(locationData);

const buyBtn = document.createElement('button');
buyBtn.classList.add('shows__button');
buyBtn.innerText = 'BUY TICKETS';
showListSection.appendChild(buyBtn);

const divider = document.createElement('hr');
divider.classList.add('shows__divider');
showListSection.appendChild(divider);

return showListSection

}

const generateShowsList = (shows) => {
    for (let i = 0; i < shows.length; i++){
        const showData = shows[i];
        console.log('Shows Data: ', showData);
        const showSections = generateShowsContent(showData);
        console.log('Shows Sections: ', showSections);
        showsList.appendChild(showSections);
    }
}

// function dateFormatter(date) {
//     // DD/MM/YYYY
//     const month = date.getMonth() + 1;
//     const days = date.getDate() + 1;
//     const year = date.getFullYear();

//     return `${month}/${days}/${year}`;
// }

