const mdBlock = document.querySelector("md-block");
let observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.target === mdBlock && mdBlock.rendered === "remote") {
      mutation.target.innerHTML = mutation.target.innerHTML.split(
        '<p><a name="webpage-cut">'
      )[0];
    }
  });
});
observer.observe(mdBlock, {
  attributes: true,
});
