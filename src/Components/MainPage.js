import renderAbout from './About.js'
import renderNavbar from './Navbar.js'
import renderNews, {searchSort} from './News.js'
import renderProjects, {radioSort} from './Projects.js'

export default function renderMainPage(data){
        document.querySelector('.container').innerHTML = `
        ${renderNavbar('main', Object.keys(data))}
        ${renderAbout(data.about)}
        ${renderProjects(data.projects)}
        <h1 class="title">News</h1>
        ${renderNews(data.news)}
            <div>
             <footer>Copyright © 2020 </footer>
        </div
        `;
        searchSort(data);
        radioSort(data);
}