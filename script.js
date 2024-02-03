document.querySelector('.post-button').addEventListener('click', function() {
    const tweetContent = document.querySelector('#tweet-content').value;
    if(tweetContent.trim() === ''){
        alert('Please enter something before posting');
        return;
    }
    const tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweet');
    const profilePic = document.createElement('img');
    profilePic.classList.add('ppf');
    profilePic.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739';
    const tweetText = document.createElement('p');
    tweetText.classList.add('.marginleft');
    tweetText.textContent = tweetContent;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        tweetDiv.remove();
    });
    const likeButton = document.createElement('button');
    likeButton.classList.add('like-button');
    likeButton.textContent = 'Like';
    likeButton.addEventListener('click', function() {
        const likeCount = parseInt(likeButton.getAttribute('data-likes')) || 0;
        likeButton.setAttribute('data-likes', likeCount + 1);
        likeButton.textContent = `Liked ${likeCount + 1} times`;
    });
    const commentButton = document.createElement('button');
    commentButton.classList.add('comment-button');
    commentButton.textContent = 'Comment';
    commentButton.addEventListener('click', function() {
        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Enter your comment';
        const commentSubmitButton = document.createElement('button');
        commentSubmitButton.textContent = 'Submit';
        commentSubmitButton.addEventListener('click', function() {
            const commentText = commentInput.value;
            if(commentText.trim() === ''){
                alert('Please enter something before commenting');
                return;
            }
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            const commentP = document.createElement('p');
            commentP.textContent = commentText;
            const deleteCommentButton = document.createElement('button');
            deleteCommentButton.classList.add('delete-comment-button');
            deleteCommentButton.textContent = 'Delete';
            deleteCommentButton.addEventListener('click', function() {
                commentDiv.remove();
            });
            commentDiv.appendChild(commentP);
            commentDiv.appendChild(deleteCommentButton);
            tweetDiv.appendChild(commentDiv);
            commentInput.value = '';
        });
        tweetDiv.appendChild(commentButton);
        tweetDiv.appendChild(commentInput);
        tweetDiv.appendChild(commentSubmitButton);
    });
    tweetDiv.appendChild(profilePic);
    tweetDiv.appendChild(tweetText);
    tweetDiv.appendChild(deleteButton);
    tweetDiv.appendChild(likeButton);
    tweetDiv.appendChild(commentButton);
    document.querySelector('.posted-tweets').appendChild(tweetDiv);
    document.querySelector('#tweet-content').value = '';
});