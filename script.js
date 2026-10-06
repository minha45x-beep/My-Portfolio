let hireButton = document.querySelector(".hero-buttons a");
function changeButton() {
    if(hireButton.textContent === "Hire Me")
    {
        hireButton.textContent = "Thanks!";
    }else{
        hireButton.textContent = "Hire Me";
    }
    heading.classList.toggle("highlight");
    
}
hireButton.addEventListener("click",changeButton);

let heading = document.querySelector(".hero-title");
heading.textContent = "Welcome to my website";

let skills = ["HTML","CSS","JavaScript"]
console.log(skills[0]);

skills.push("Git");
skills[1] = "Advanced CSS";
console.log(skills);

skills.forEach(function(skill){
    console.log(skill);
})

let project = {
    name:"Restaurant Website",
    type:"Business website",
    year:2026
};
console.log(project.year);

let projects = [
{
    username:"Restaurant Website",
    type:"Business Website",
    description:"A clean website for a local restaurant",
    link:"#"
},
{username:"My Portfolio",type:"Personal Website"} 
];

let projectGrid = document.querySelector(".project-grid");

projects.forEach(function(project){
    let card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
    <h3>${project.username}</h3>
    <p>${project.description}</p>
    <a href="#">View Project</a>
    `;

    projectGrid.appendChild(card);

    console.log(project.username);
}); 