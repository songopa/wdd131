const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = new Date().getFullYear();

const modified = document.querySelector("#lastModified");
modified.innerHTML = document.lastModified;