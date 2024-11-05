// Get form and output elements
var resumeForm = document.getElementById('resume-form');
var outputName = document.getElementById('output-name');
var outputEmail = document.getElementById('output-email');
var outputEducation = document.getElementById('output-education');
var outputWork = document.getElementById('output-work');
var outputSkills = document.getElementById('output-skills');
// Validate form inputs
function validateForm(data) {
    if (!data.name || !data.email || !data.education || !data.workExperience || !data.skills) {
        alert('Please fill out all fields');
        return false;
    }
    return true;
}
// Function to populate resume
function generateResume(data) {
    outputName.textContent = data.name;
    outputEmail.textContent = data.email;
    outputEducation.textContent = data.education;
    outputWork.textContent = data.workExperience;
    outputSkills.textContent = data.skills;
}
// Make sections editable on click
function makeEditable(element) {
    element.addEventListener('click', function () {
        element.contentEditable = "true";
        element.focus();
    });
    // Save changes on blur (when user clicks outside)
    element.addEventListener('blur', function () {
        element.contentEditable = "false";
    });
    // Save changes on 'Enter' key press
    element.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            element.blur();
            e.preventDefault();
        }
    });
}
// Apply the editable behavior to the resume sections
function initializeEditableFields() {
    makeEditable(outputName);
    makeEditable(outputEmail);
    makeEditable(outputEducation);
    makeEditable(outputWork);
    makeEditable(outputSkills);
}
// Form submission event listener
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        education: document.getElementById('education').value,
        workExperience: document.getElementById('work').value,
        skills: document.getElementById('skills').value,
    };
    // Validate form
    if (validateForm(formData)) {
        generateResume(formData);
        initializeEditableFields(); // Make fields editable after generating the resume
    }
});
