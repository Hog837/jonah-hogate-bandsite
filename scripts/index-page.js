const comments = [
    {
        name: 'Billy Joe',
        timestamp: '02/17/2021',
        text: `This is art. This is inexplicable magic 
        expressed in the purest way, everything 
        that makes up this majestic work 
        deserves reverence. Let us appreciate 
        this for what it is and what it contains.`
    }, {
        name: 'Billy Joe',
        timestamp: '02/17/2021',
        text: `This is art. This is inexplicable magic 
        expressed in the purest way, everything 
        that makes up this majestic work 
        deserves reverence. Let us appreciate 
        this for what it is and what it contains.`
    }, {
        name: 'Billy Joe',
        timestamp: '02/17/2021',
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

    comments.unshift(comment);
    displayComments();
}