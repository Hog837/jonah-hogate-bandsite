const comments = [
    {
        name: 'Connor Walton',
        timestamp: '02/17/2021',
        text: `This is art. This is inexplicable magic 
        expressed in the purest way, everything 
        that makes up this majestic work 
        deserves reverence. Let us appreciate 
        this for what it is and what it contains.`
    }, {
        name: 'Emilie Beach',
        timestamp: '12/09/2021',
        text: ` feel blessed to have seen them in 
        person. What a show! They were just 
        perfection. If there was one day of my 
        life I could relive, this would be it. What 
        an incredible day.`
    }, {
        name: 'Miles Acosta',
        timestamp: '12/20/2020',
        text: `This is art. This is inexplicable magic 
        expressed in the purest way, everything 
        that makes up this majestic work 
        deserves reverence. Let us appreciate 
        this for what it is and what it contains.`
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

        const commentsContainer = document.querySelector('.comments__container');

        // const commentImageContainer = document.createElement('div');
        // commentImageContainer.classList.add(comments__image-container);
        // commentsContainer.appendChild(commentImageContainer);

        // const commentImage = document.createElement('img');
        // commentImage.classList.add(comment__image)
        // commentImageContainer.appendChild(commentImage)




        const topContainer = document.createElement('div');
        topContainer.classList.add("comments__top-container")

        commentsContainer.appendChild(topContainer);

        const commentName = document.createElement('p');
        commentName.innerText = comment.name;
        topContainer.appendChild(commentName);

        const commentTimestamp = document.createElement('p');
        commentTimestamp.innerText = comment.timestamp;
        topContainer.appendChild(commentTimestamp)

        

        const commentText = document.createElement('p');
        commentText.innerText = comment.text;
        commentsContainer.appendChild(commentText)

        const divider = document.createElement('hr');
        divider.classList.add('comment__divider');
        commentsContainer.appendChild(divider);
    });
}

function createComment() {
    let userName = document.getElementById('name').value;
    let text = document.getElementById('commentText').value;
    let date = new Date();
    let comment = {
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