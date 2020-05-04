export default function renderProjects(projects){
    return `
    <section id="projects">
        <h1 class="title">Airbnb Price Distribution Maps</h1>
        <div class="project-list">
        ${renderProjectItems(projects)}
        </div>
    </section>`;
}

export function renderProjectItems(projects){
    return projects.map(d=>`
        <div class="row">
            <div class="col-6">
                <img src="${d.teaser1}" width=325px>
                <div class="project-title">
                    <a href="?project=${d.id}"><strong>${d.title}</strong></a>
                </div>
                 
        </div>
    `).join('');
}

