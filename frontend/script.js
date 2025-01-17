// document.querySelectorAll(".navigate").forEach((button) => {
//   button.addEventListener("click", () => {
//     const target = button.getAttribute("data-target");
//     window.location.href = target;
//   });
// });
function navigateTo(role) {
  const rolePage = {
    lawyer: "lawyer.html",
    lawstudent: "lawstudent.html",
    client: "client.html",
  };
  window.location.href = rolePage[role];
}
