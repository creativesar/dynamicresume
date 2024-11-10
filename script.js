// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Form submit handler
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate resume with dynamic content and make sections editable
    var resumeData = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p\"><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, " </span></p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</span></p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, " </span></p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeData;
    }
    else {
        console.error('Display element is missing');
    }
});
