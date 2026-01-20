function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

/* SKILLS TAB SWITCH */
function showSkills(evt, skillId) {
  document.querySelectorAll(".tab").forEach(tab =>
    tab.classList.remove("active")
  );

  document.querySelectorAll(".skills-panel").forEach(panel =>
    panel.classList.remove("active")
  );

  evt.currentTarget.classList.add("active");
  document.getElementById(skillId).classList.add("active");
}

/* PROJECT MODAL */
function openProject(id) {
  document.getElementById("projectModal").style.display = "block";
  document.querySelectorAll(".project-detail").forEach(p =>
    p.style.display = "none"
  );
  document.getElementById(id).style.display = "block";
}

function closeProject() {
  document.getElementById("projectModal").style.display = "none";
}
