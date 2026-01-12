const form = document.getElementById("review-form");
const list = document.getElementById("reviews-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("reviewer-name").value;
  const text = document.getElementById("review-text").value;

  const review = document.createElement("div");
  review.className = "p-4 rounded-xl bg-teal-50 shadow";
  review.innerHTML = `
    <p class="font-semibold">${name}</p>
    <p class="text-slate-600">${text}</p>
  `;

  list.prepend(review);
  form.reset();
});
