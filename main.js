document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var elements = document.querySelectorAll('.fade-in');
        elements.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.classList.add('active');
            }
        });
    });

    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

function toggleLike() {
    // Add your logic to handle like button click
    alert('Liked!');
}

function toggleComment() {
    var commentForm = document.getElementById('comment-form');
    commentForm.style.display = (commentForm.style.display === 'block') ? 'none' : 'block';
}

function toggleComment() {
    var commentForm = document.getElementById('comment-form');
    commentForm.style.display = (commentForm.style.display === 'block') ? 'none' : 'block';
}

function submitComment() {
    var commentInput = document.getElementById('comment-input');
    var comment = commentInput.value.trim();

    if (comment !== '') {
        // Save the comment to local storage (replace this with actual backend storage)
        saveComment(comment);

        // Display the submitted comment
        displayComments();
        
        // Clear the input field
        commentInput.value = '';
    }
}

function saveComment(comment) {
    // In a real scenario, you would send the comment to the backend for storage
    // For this example, let's use local storage
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

function displayComments() {
    var commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = '';

    // Retrieve comments from local storage
    var comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Display each comment
    comments.forEach(function(comment) {
        var commentElement = document.createElement('div');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
    });
}