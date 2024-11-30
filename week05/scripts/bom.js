let chaptersArray = getChaptersList() || [];
const inputElm= document.querySelector('#favchap');


document.querySelector('#addChapter').addEventListener('click', function() {
    
    if (inputElm.value.trim() === "") {
        inputElm.focus();
        alert('please write something')
        return
    }
    
    displayList(inputElm.value);
    chaptersArray.push(inputElm.value)
    setChapterList(chaptersArray)
    
    inputElm.value = '';
    inputElm.focus();

    
});


function getChaptersList() {
    let books = localStorage.getItem('savedChapters');
    return JSON.parse(books);
}

function setChapterList() {
    let books = JSON.stringify(chaptersArray);
    localStorage.setItem('savedChapters', books);
}

chaptersArray.forEach(chapter => {
    displayList (chapter)
});

function displayList(chapter) {
    const chapterList = document.querySelector('#list');
    const listItem = document.createElement('li')
    const deleteItemBtn = document.createElement('button')
    
    listItem.textContent = chapter;
    deleteItemBtn.textContent = '❌';
    deleteItemBtn.classList.add('delete');
    listItem.append(deleteItemBtn);
    chapterList.append(listItem)
    deleteItemBtn.addEventListener('click', function() {
        chapterList.removeChild(listItem);
        deleteChapter(listItem.textContent)
        inputElm.focus();
    });
};

function deleteChapter(chapterToDelete) {
    chapterToDelete = chapterToDelete.slice(0, chapterToDelete.length - 1)
    chaptersArray = chaptersArray.filter((chapter) => chapter !== chapterToDelete)
    setChapterList();
};