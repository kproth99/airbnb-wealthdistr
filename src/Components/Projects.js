export default function renderProjects(projects){
    return `
    <section id="projects">
        <h1 class="title">Projects</h1>

        <div class="filter">
        <label>
            <input type="radio" name="filter" value="all" checked> All
        </label>
        <label>
            <input type="radio" name="filter" value="Class"> Class
        </label>
        <label>
            <input type="radio" name="filter" value="Final Project"> Final Project
        </label>
        <label>
            <input type="radio" name="filter" value="Music"> Music
        </label>

    </div>

    <br>

        <div class="project-list">
        ${renderProjectItems(projects)}
        </div>
    </section>`;
}

export function renderProjectItems(projects){
    return projects.map(
        d => `

        <div>
            <div class="project-title">
            <a href="?project=${d.id}"><strong>${d.title}</strong></a>
            </div>
        </div>

        <div class="row">
        <div class="col-6">
            <div class="authors" style="text-align:left"> 
                ${d.authors} 
            </div>
            <div class="source" style="text-align:left"> 
                <em>${d.source}</em> 
            </div>
            
  
            <div class="label" style="text-align:left">
                <span><a href="${d.materials[0].path}"> <i class="${d.icon1}"></i> 
                    ${d.materials[0].label} </a>
                </span> |
                <span><a href="${d.materials[1].path}"> <i class="${d.icon2}"></i> 
                    ${d.materials[1].label} </a>
                </span>
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