"use strict";

const connectLinkedinUrl = document.querySelectorAll(".linkdin-coonect");

const backToTopButton = document.querySelector(".back-to-top-container");
backToTopButton.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
const ecommerceMicroserviceCard = document.getElementById(
  "ecommerce-microserice-card"
);
const projectVME = document.getElementById("vme");
const projectEmployeMS = document.getElementById(
  "employee-managment-system-project"
);
const projectTaskMS = document.getElementById("task-managment-service-card");
const contactsBS = document.getElementById("contacts-backend-service-card");

contactsBS.addEventListener("click", () => {
  const githubVMELink = "https://github.com/ajayxverma/contacts-api-nodejs";
  window.open(githubVMELink, "_blank");
});

projectTaskMS.addEventListener("click", () => {
  const githubVMELink = "https://github.com/ajayxverma/nestjs-task-management";
  window.open(githubVMELink, "_blank");
});
projectEmployeMS.addEventListener("click", () => {
  const githubVMELink = "https://github.com/ajayxverma/EmployeeManagement";
  window.open(githubVMELink, "_blank");
});

projectVME.addEventListener("click", () => {
  const githubVMELink = "https://github.com/ajayxverma/VME";
  window.open(githubVMELink, "_blank");
});

connectLinkedinUrl.forEach((button) => {
  button.addEventListener("click", () => {
    const linkdinUrl = "https://www.linkedin.com/in/ajayxverma/";
    window.open(linkdinUrl, "_blank");
  });
});
ecommerceMicroserviceCard.addEventListener("click", () => {
  const url = "https://github.com/ajayxverma/EcommerceMicroServices";
  window.open(url, "_blank");
});
