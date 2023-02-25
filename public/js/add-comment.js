/* This function handles the add comment button.*/

async function newCommentHandler(event) {
  event.preventDefault();

  const comment_author = document.querySelector('form[name="new-comment"]').id;
  const comment_text = document.querySelector("#comment_text").value;
  const entry_id = document.querySelector('div[name="blog-detail"]').id;

  console.log("author", comment_author);
  console.log("comment", comment_text);
  console.log("comment", entry_id);

  const response = await fetch("/api/comments/", {
    method: "POST",
    body: JSON.stringify({
      comment_author,
      entry_id,
      comment_text,
    }),
    headers: { "Content-Type": "application/json" },
  });

  //if comment is added then the blog detail page will be rerendered
  if (response.ok) {
     document.location.reload();
  } else {
    alert("failed to load comment");
  }
}

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);
