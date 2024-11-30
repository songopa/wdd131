const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

const nameOptionsElm = document.getElementById('product-name')

function populateProductNames() {

products.forEach(product => {
    let option = document.createElement('option')
    option.value = product.id
    option.textContent = product.name
    nameOptionsElm.append(option)
});
}

if (nameOptionsElm) {
    populateProductNames()
}



let reviewCount = getReviewCount() || '0';

function getReviewCount () {
    return localStorage.getItem('reviewCount')
}
function saveReviewCount() {
    localStorage.setItem('reviewCount', reviewCount)
}

const reviewForm= document.getElementById('review-form');
if (reviewForm) {

    reviewForm.addEventListener('submit', () => {
     
        reviewCount = parseInt(reviewCount) +1
        saveReviewCount();
    });
}

const reviewShowElm = document.getElementById('review-count');
if (reviewShowElm) {
    reviewShowElm.innerHTML = `You made ${reviewCount} Reviews`
}