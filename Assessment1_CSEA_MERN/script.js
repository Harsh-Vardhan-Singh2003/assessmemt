function createCV() {
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPhone = document.getElementById('userPhone').value;
    const linkedIn = document.getElementById('linkedIn').value;
    const githubProfile = document.getElementById('githubProfile').value;
    const workExperience = document.getElementById('workExperience').value;
    const educationBackground = document.getElementById('educationBackground').value;
    const profilePic = document.getElementById('profilePic').files[0];

    document.getElementById('formSection').style.display = 'none';
    document.getElementById('cvSection').style.display = 'block';

    document.getElementById('cvName').innerText = userName;
    document.getElementById('cvDetails').innerHTML = `
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Phone:</strong> ${userPhone}</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/${linkedIn}" target="_blank">${linkedIn}</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/${githubProfile}" target="_blank">${githubProfile}</a></p>
        <p><strong>Experience:</strong> ${workExperience}</p>
        <p><strong>Education:</strong> ${educationBackground}</p>
    `;

    const reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById('cvImage').src = event.target.result;
    };
    if (profilePic) {
        reader.readAsDataURL(profilePic);
    }
}

function savePDF() {
    const saveButton = document.getElementById('saveBtn');
    saveButton.style.display = 'none';

    const cvSection = document.getElementById('cvSection');
    html2pdf().from(cvSection).set({
        margin: 0,
        filename: 'cv_document.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait' }
    }).save().then(() => {
        saveButton.style.display = 'block';
    });
}