let apiKey = "https://project-1-api.herokuapp.com/comments?api_key=c05d162e-b795-40f8-a99e-c8ecaaa5237c"

const comments = [
    {
        img: '',
        name: 'Connor Walton',
        timestamp: '02/17/2021',
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    }, {
        img: '',
        name: 'Emilie Beach',
        timestamp: '12/09/2021',
        text: "feel blessed to have seen them in person. What a show! They were just  perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    }, {
        img: '',
        name: 'Miles Acosta',
        timestamp: '12/20/2020',
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    }
];

document.getElementById('commentSubmit').addEventListener('click', createComment);
displayComments();

function displayComments() {
    comments.forEach((comment) => {
        //html for display
        console.log(comment.name);
        console.log(comment.text);
        console.log(comment.timestamp);
        // createing comment container
        const commentsContainer = document.querySelector('.comments__container');

        // creating all container
        const allContainer = document.createElement('div')
        allContainer.classList.add('comment__all-container')

        // creating container for image
        const commentsImageContainer = document.createElement('div');
        commentsImageContainer.classList.add('comments__image-container');
        allContainer.appendChild(commentsImageContainer);
        // creating/appending img
        const commentImage = document.createElement('img');
        commentImage.classList.add('comment__image')
        commentsImageContainer.appendChild(commentImage)

        // creating data container
        const commentDataContainer = document.createElement('div');
        commentDataContainer.classList.add('comments__data-container');
        

        // creating and appending the top-container
        const topContainer = document.createElement('div');
        topContainer.classList.add("comments__top-container")
        commentsContainer.appendChild(topContainer);

        
        
        // creating and appending the name
        const commentName = document.createElement('p');
        commentName.innerText = comment.name;
        commentName.classList.add('comment__name')
        topContainer.appendChild(commentName);
        // creating and appending the timestamp
        const commentTimestamp = document.createElement('p');
        commentTimestamp.innerText = comment.timestamp;
        topContainer.appendChild(commentTimestamp)
        // creating and appending the text
        const commentText = document.createElement('p');
        commentText.innerText = comment.text;
        commentText.classList.add('comment__text');
        commentsContainer.appendChild(commentText)
        // appending the data container
        commentsContainer.appendChild(commentDataContainer);
        commentDataContainer.appendChild(topContainer);
        commentDataContainer.appendChild(commentText);
        
        // append all container
        commentsContainer.appendChild(allContainer);
        allContainer.appendChild(commentsImageContainer);
        allContainer.appendChild(commentDataContainer);

        // creating and appending the hr element
        const divider = document.createElement('hr');
        divider.classList.add('comment__divider');
        commentsContainer.appendChild(divider);
    });
}

function createComment() {
    let userName = document.getElementById('name').value;
    let text = document.getElementById('commentText').value;
    let date = new Date();
    dateData = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    let comment = {
        img: '',
        name: userName,
        timestamp: date,
        text
    };
    
    console.log(`${userName} - ${text} - ${date}`);

    document.getElementById('name').value = null;
    document.getElementById('commentText').value = null;

    const commentsContainer = document.querySelector('.comments__container');

    comments.unshift(comment);
    commentsContainer.innerHTML = '';
    displayComments();
    
}