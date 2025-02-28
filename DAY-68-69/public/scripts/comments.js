const loadCommentsButtonElement = document.getElementById("load-comments-btn");
const commentsSectionElement = document.getElementById("comments");
const commentsFormElement = document.querySelector("#comments-form form");
const commentTitleElement = document.getElementById("title");
const commentTextElement = document.getElementById("text");

function createCommentsList(comments) {
  const commentListElement = document.createElement("ol");

  for (const comment of comments) {
    const commentElement = document.createElement("li");
    commentElement.innerHTML = `
      <article class="comment-item">
        <h2>${comment.title}</h2>
        <p>${comment.text}</p>
      </article>
    `;
    commentListElement.appendChild(commentElement);
  }
  return commentListElement;
}

async function fetchCommentsForPost() {
  const postId = loadCommentsButtonElement.dataset.postid;

  const response = await fetch(`/posts/${postId}/comments`);

  if (!response.ok) {
    alert("Fetching comments failed!");
    return;
  }

  const responseData = await response.json();

  if (responseData && responseData.length > 0) {
    const commentsListElement = createCommentsList(responseData);
    commentsSectionElement.innerHTML = "";
    commentsSectionElement.appendChild(commentsListElement);
  } else {
    commentsSectionElement.firstElementChild.textContent =
      "No comments found! Maybe add one? 👇🏼";
  }
}

async function saveComment(event) {
  event.preventDefault();
  const postId = loadCommentsButtonElement.dataset.postid;

  const enteredTitle = commentTitleElement.value;
  const enteredText = commentTextElement.value;

  const comment = { title: enteredTitle, text: enteredText };
  const response = await fetch(`/posts/${postId}/comments`, {
    method: "POST", // Default is 'GET'
    body: JSON.stringify(comment), // Refer file:notes-68
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    fetchCommentsForPost(); // Adds comment without reloading/refreshing the page
  } else {
    alert(`Could not send comment! Server returned: ${errorMessage}`); // Display the error message
  }
}

loadCommentsButtonElement.addEventListener("click", fetchCommentsForPost);
commentsFormElement.addEventListener("submit", saveComment);
