import renderMainPage from './Components/MainPage.js'
import renderProjectPage from './Components/ProjectPage.js'
import renderProjectPage2 from './Components/ProjectPage2.js'
import renderProjectPage3 from './Components/ProjectPage3.js'

fetch("assets/data.json")
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        const params = new URLSearchParams(window.location.search);
        console.log(params);
        console.log('projects.param', params.get('project'));
        if (params.get("project") === null) {
            renderMainPage(data);  
        } 
        else if (params.get("project") === "austin"){
            let id = params.get("project");
            console.log(id);
            let project = data.projects.find(function(project){
            console.log(project.id)
                return project.id === id;
        } );
        renderProjectPage(project);
    }
    else if (params.get("project") === "newyork"){
        let id = params.get("project");
        console.log(id);
        let project = data.projects.find(function(project){
        console.log(project.id)
            return project.id === id;
    } );
        renderProjectPage2(project);
}
    else if (params.get("project") === "sanfran"){
    let id = params.get("project");
    console.log(id);
    let project = data.projects.find(function(project){
    console.log(project.id)
        return project.id === id;
} );
    renderProjectPage3(project);
}
    
});
