document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Display Personal Info
            const personalInfo = document.getElementById('personal-info');
            personalInfo.innerHTML = `
                <h1 class="text-4xl font-bold text-gray-900">${data.personalInfo.name}</h1>
                <div class="mt-2 text-gray-600 space-y-1 md:flex md:space-x-4 md:space-y-0">
                    <p>${data.personalInfo.location}</p>
                    <p>${data.personalInfo.phone}</p>
                    <a href="mailto:${data.personalInfo.email}" class="hover:text-blue-600 transition-colors">${data.personalInfo.email}</a>
                    <a href="${data.personalInfo.linkedin}" target="_blank" class="hover:text-blue-600 transition-colors">LinkedIn</a>
                    <a href="${data.personalInfo.github}" target="_blank" class="hover:text-blue-600 transition-colors">GitHub</a>
                </div>
            `;

            // Display Summary
            const summary = document.getElementById('summary');
            summary.textContent = data.summary;

            // Display Education
            const educationContainer = document.getElementById('education-container');
            data.education.forEach(edu => {
                educationContainer.innerHTML += `
                    <div class="mb-4">
                        <h3 class="text-xl font-semibold text-gray-800">${edu.degree}</h3>
                        <p class="text-gray-600">${edu.school}, ${edu.location}</p>
                        <p class="text-sm text-gray-500">${edu.dates}</p>
                    </div>
                `;
            });

            // Display Experience
            const experienceContainer = document.getElementById('experience-container');
            data.experience.forEach(exp => {
                experienceContainer.innerHTML += `
                    <div class="mb-4">
                        <h3 class="text-xl font-semibold text-gray-800">${exp.title} at ${exp.company}</h3>
                        <p class="text-gray-600">${exp.location}</p>
                        <p class="text-sm text-gray-500">${exp.dates}</p>
                        <p class="mt-2">${exp.description}</p>
                        <div class="mt-2">
                            <span class="font-semibold text-gray-700">Skills: </span>
                            ${exp.skills.map(skill => `<span class="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">${skill}</span>`).join('')}
                        </div>
                    </div>
                `;
            });

            // Display Certifications
            const certificationsList = document.getElementById('certifications-list');
            data.certifications.forEach(cert => {
                certificationsList.innerHTML += `<li>${cert}</li>`;
            });

            // Display Languages
            const languagesList = document.getElementById('languages-list');
            data.languages.forEach(lang => {
                languagesList.innerHTML += `<li>${lang}</li>`;
            });
        })
        .catch(error => console.error('Error fetching CV data:', error));
});