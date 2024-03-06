// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the form element
    const form = document.getElementById("personal-info-form");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Collect personal information
        const fullname = document.getElementById("fullname").value;
        const dob = document.getElementById("dob").value;
        const cccd = document.getElementById("cccd").value;
        const address = document.getElementById("address").value;

        // You can perform further validation or processing of the personal information here

        // Move user to survey screen and pass user information as query parameters
        moveToSurveyScreen(fullname, dob, cccd, address);
    });
});

function moveToSurveyScreen(fullname, dob, cccd, address) {
    // Encode user information as query parameters
    const queryParams = new URLSearchParams({
        fullname: fullname,
        dob: dob,
        cccd: cccd,
        address: address
    });

    // Construct the URL for the survey page with query parameters
    const surveyUrl = "survey.html?" + queryParams.toString();

    // Navigate to the survey page
    window.location.href = surveyUrl;
}

// Create an array of 40 questions divided into 4 groups
