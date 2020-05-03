export default function renderNews(news) {
    return `
     <section id = "news">
        <h1 class="title">Project Deliverables</h1>
        <div class="search">
            <input type="search" name='news' placeholder="Search News...">
        </div>
        <div class = "news-list">
            ${renderNewsItems(news)}
        </div>
    </section>
    `;
    
}

export function renderNewsItems(news){
    return news.map(
        n =>
        ` <br> 
        <div class="row1">
                <div class="col-8">
                ${n.title}
                </div>
                <div class="col-4">
                ${n.date}
                </div>
        </div>
        </br> ` 
    )
    .join('')
}

