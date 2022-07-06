const labels = document.querySelectorAll(".form-control label");

// labels will return an array, so we can use forEach() loop to loop through
// the labels elements
labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms;">${letter}</span>`
    )
    .join("");
});
