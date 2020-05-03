import renderAbout from './About.js'
import renderNavbar from './Navbar.js'
import renderNews from './News.js'
import renderProjects from './Projects.js'

export default function renderMainPage(data){
        document.querySelector('.container').innerHTML = `
        ${renderNavbar('main', Object.keys(data))}
        ${renderAbout(data.about)}
        ${renderProjects(data.projects)}
        ${renderNews(data.news)}
            <div>
             <footer>Copyright © 2020 </footer>
        </div
        `;
        
}