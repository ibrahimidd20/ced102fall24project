document.addEventListener("DOMContentLoaded", () => {
    const addSkillBtn = document.getElementById("add-skill-btn");
    const skillList = document.getElementById("skill-list");
    const userNameInput = document.getElementById("userName");
    const downloadReportBtn = document.getElementById("downloadReportBtn");

    let skills = [];

    function renderSkills() {
        skillList.innerHTML = "";
        skills.forEach((skill, index) => {
            const skillDiv = document.createElement("div");
            skillDiv.classList.add("skill");

            const skillNameInput = document.createElement("input");
            skillNameInput.type = "text";
            skillNameInput.value = skill.name;
            skillNameInput.disabled = !skill.editing;
            skillDiv.appendChild(skillNameInput);

            const progressInput = document.createElement("input");
            progressInput.type = "number";
            progressInput.value = skill.progress;
            progressInput.max = 100;
            progressInput.disabled = !skill.editing;
            skillDiv.appendChild(progressInput);

            const editBtn = document.createElement("button");
            editBtn.textContent = skill.editing ? "Save" : "Edit";
            editBtn.addEventListener("click", () => {
                if (skill.editing) {
                    skill.name = skillNameInput.value.trim();
                    skill.progress = parseInt(progressInput.value, 10);
                }
                skill.editing = !skill.editing;
                renderSkills();
            });
            skillDiv.appendChild(editBtn);

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => {
                skills.splice(index, 1);
                renderSkills();
            });
            skillDiv.appendChild(deleteBtn);

            skillList.appendChild(skillDiv);
        });

        downloadReportBtn.disabled = !skills.some(skill => skill.progress === 100);
    }

    addSkillBtn.addEventListener("click", () => {
        const skillName = document.getElementById("new-skill-input").value.trim();
        if (skillName) {
            skills.push({ name: skillName, progress: 0, editing: false });
            document.getElementById("new-skill-input").value = "";
            renderSkills();
        } else {
            alert("Please enter a skill name.");
        }
    });

    downloadReportBtn.addEventListener("click", () => {
        const userName = userNameInput.value.trim();
        if (!userName) {
            alert("Please enter your name before downloading the report.");
            return;
        }

        const completedSkills = skills.filter(skill => skill.progress === 100);
        if (completedSkills.length === 0) {
            alert("No completed skills to include in the report.");
            return;
        }

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        pdf.text(`Completed Skills Report`, 10, 10);
        pdf.text(`User: ${userName}`, 10, 20);
        pdf.text(`Skills:`, 10, 30);

        completedSkills.forEach((skill, index) => {
            pdf.text(`${index + 1}. ${skill.name}`, 10, 40 + index * 10);
        });

        pdf.save(`${userName}_CED102_Completed_Skills_Report.pdf`);
    });

    renderSkills();
});
