let coursesList = [];
let selectedCourse = {};

function fetchCourses() {
    fetch('db/courses.sql')
        .then(response => response.json())
        .then(data => {
            coursesList = data;
            displayCourses();
        })
        .catch(error => console.error('Error:', error));
}

function displayCourses() {
    const courseContainer = document.getElementById('courseContainer');
    courseContainer.innerHTML = '';
    coursesList.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <img src="img/${course.image}" alt="${course.name}">
            <h2>${course.name}</h2>
            <p>${course.description}</p>
            <button id="purchaseButton" onclick="purchaseCourse(${course.id})">Purchase</button>
        `;
        courseContainer.appendChild(courseCard);
    });
}

function purchaseCourse(courseId) {
    selectedCourse = coursesList.find(course => course.id === courseId);
    fetch('php/purchase.php', {
        method: 'POST',
        body: JSON.stringify(selectedCourse),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'purchaseSuccess') {
            alert('Purchase successful!');
        } else {
            alert('Purchase failed. Please try again.');
        }
    })
    .catch(error => console.error('Error:', error));
}

fetchCourses();