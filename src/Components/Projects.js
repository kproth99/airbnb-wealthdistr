export default function renderProjects(projects){
    return `
    <section id="projects">
        <h1 class="title">Project Deliverables</h1>
        
        <div class="project-list">
        ${renderProjectItems(projects)}
        </div>
    </section>`;
}

export function renderProjectItems(projects){
    return projects.map(
        d => `

        <div>
        <div class="column2">
        <img class="profile-img" src="${d.hoto1}" >
            <div class="project-title">
            <a href="?project=${d.id}"><strong>${d.title}</strong></a>
            </div>
        </div>
        </div>
        </div>
    <br>`
    ).join('');
}

export function radioSort(data){
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    buttons.forEach(cond=>cond.addEventListener('change', function(event){
        let tag = event.target.value;
        if(tag === "all"){
            document.querySelector(".project-list").innerHTML = renderProjectItems(data.projects);
        }
        else{
            const filtered = data.projects.filter(projects=>((projects.tags===(event.target.value))));
            document.querySelector('project-list').innerHTML = renderProjectItems(filtered);
        }
    }));
}