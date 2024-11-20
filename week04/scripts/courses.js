const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
    ],
    enrollment: function (secNum, status) {
        const section = this.sections.find((section) => section.sectionNum == secNum);
        if (section) {
            if (status == 'enroll')
            {
                section.enrolled ++;
            }
            if (status == 'drop') {
                section.enrolled --;
            }
            renderSections(aCourse);
        }
    },
};

function courseDetails (course) {
    const nameElement = document.getElementById('courseName');
    const codeElement = document.getElementById('courseCode');

    nameElement.innerHTML = course.name;
    codeElement.innerHTML = course.code;
}

function renderSections (course) {
    const sectionsTableBody = document.getElementById('sections');
    sectionsTableBody.innerHTML = "";
    course.sections.forEach(section => {
        let newRow = sectionsTableBody.insertRow()

        newRow.insertCell(0).innerHTML = section.sectionNum
        newRow.insertCell(1).innerHTML = section.roomNum
        newRow.insertCell(2).innerHTML = section.enrolled
        newRow.insertCell(3).innerHTML = section.days
        newRow.insertCell(4).innerHTML = section.instructor
    });
}


document.getElementById('enrollStudent').addEventListener('click', () => {
    let secNum = document.getElementById('sectionNumber').value;
    aCourse.enrollment(secNum, 'enroll');
})
document.getElementById('dropStudent').addEventListener('click', () => {
    let secNum = document.getElementById('sectionNumber').value;
    aCourse.enrollment(secNum, 'drop');
})

courseDetails(aCourse)
renderSections(aCourse)

