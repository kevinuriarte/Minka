async function upvoteClickHandler(e) {
  e.preventDefault();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // put vote
  const response = await fetch("/api/posts/upvote", {
    method: "PUT",
    body: JSON.stringify({ post_id }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(`${response.statusText}
    You can only vote on posts once`);
  }
}

document
  .querySelector(".btn-vote")
  .addEventListener("click", upvoteClickHandler);