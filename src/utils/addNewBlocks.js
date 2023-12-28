export function addNewBlocks(selector) {
  let ul = document.querySelector(selector);
  ul.insertAdjacentHTML("afterend", ul.outerHTML);
  ul.nextElementSibling.setAttribute("aria-hidden", "true");
}