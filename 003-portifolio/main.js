const projects = [
  {
    id: 1,
    name: "Recipe Web App",
    data: "RecipeWepApp",
    image: "./images/yoRecipes.png",
    url: "https//yorecipe.netlify.app",
    category: ["Javascript", "HTML", "CSS", "APIs"]
  },
  {
    id: 2,
    name: "Online School App",
    data: "OnlineSchoolApp",
    image: "./images/httpsdevskool.netlify.app.png",
    url: "https//devskool.netlify.app",
    category: ["Javascript", "CSS", "HTML"]
  }
]

console.log(projects)

const HTML = "90%";
const CSS = "95%";
const javascript = "85%";
const react = "80%";
const git = "85%";
const bootstrap = "80%";

document.getElementById("bar1").style.width = HTML;
document.getElementById("bar2").style.width = CSS;
document.getElementById("bar3").style.width = javascript;
document.getElementById("bar4").style.width = react;
document.getElementById("bar5").style.width = git;
document.getElementById("bar6").style.width = bootstrap;

document.querySelector(".percent1").innerHTML = HTML;
document.querySelector(".percent2").innerHTML = CSS;
document.querySelector(".percent3").innerHTML = javascript;
document.querySelector(".percent4").innerHTML = react;
document.querySelector(".percent5").innerHTML = git;
document.querySelector(".percent6").innerHTML = bootstrap;

const projectsContainer = document.querySelector('.projects');
let projectCard = "";



projects.map((project) => {
  
  let technologies = "";
  
  project.category.map(tech =>{
    technologies += `
      <p class="project-name">${tech}</p>
    `;
  })
  
  projectCard += `
          <div class="project-card" data-info=${project.data}>
            <img class="project-img"
              src=${project.image}
              alt="course">
            <h2>${project.name}</h2>
            <div class="technologies">${technologies}</div>
          </div>
  `;

  projectsContainer.innerHTML = projectCard;

  const myProjects = document.querySelectorAll('.project-card');
  myProjects.forEach(project => {
    project.addEventListener('click', () => {
      const myProject = project.getAttribute('data-info');
      console.log(myProject)
      if(myProject === "RecipeWepApp"){
        window.location.href = "https://yorecipes.netlify.app"
      } else if (myProject === "OnlineSchoolApp") {
        window.location.href = "https://devskool.netlify.app"
      }
    })
  })
})