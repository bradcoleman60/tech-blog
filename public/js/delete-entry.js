// This handles the entry/blog delete button. 
async function deleteEntryHandler(event) {
  event.preventDefault();

  const id = document.getElementById("delete-btn").getAttribute("blog_ID");

  const response = await fetch("/api/entries/:id", {
    method: "DELETE",
    body: JSON.stringify({
      id,
    }),
    headers: { "Content-Type": "application/json" },
  });

  //if entry is deleted then the blog detail page will be rerendered
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("failed to load blog entry");
  }
}

document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteEntryHandler);
