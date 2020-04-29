import renderAbout from './About.js'
import renderNavbar from './Navbar.js'
import renderNews, {searchSort} from './News.js'
import renderProjects, {radioSort} from './Projects.js'

export default function renderMainPage(data){
        document.querySelector('.container').innerHTML = `
            ${renderNavbar(data.navbar)}
            ${renderAbout(data.about)}
            <h1 class="title">News</h1>
            ${renderNews(data.news)}
            ${renderProjects(data.projects)}
            <div>
             <footer>Copyright © 2020 Kieran Roth</footer>
        </div
        `;
        searchSort(data);
        radioSort(data);
}