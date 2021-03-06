export default function renderNews(news) {
    return `
     <section id = "news">
        <h1 class="title">Project Deliverables</h1>
        <div class = "news-list">
            ${renderNewsItems(news)}
        </div>
    </section>
    `;
    
}

export function renderNewsItems(news){
    return news.map(
        n => `

        <div>
            <div class="deliverable-title">
            <strong>${n.title}</strong>
            </div>
        </div>

        <div class="row">
        <div class="col-6">
            <div class="date" style="text-align:left"> 
            <em>${n.date} </em> 
            </div>
            <div class="delauthors" style="text-align:left"> 
                ${n.authors} 
            </div>
            
  
            <div class="label" style="text-align:left">
                <span><a href="${n.materials[0].path}"> <i class="${n.icon1}"></i> 
                    ${n.materials[0].label} </a> |
                </span> 
                <span><a href="${n.materials[1].path}"> <i class="${n.icon2}"></i> 
                ${n.materials[1].label} </a>
            </span> 
            </div>
            
        </div>
        </div>
    <br>`
    ).join('');
}

