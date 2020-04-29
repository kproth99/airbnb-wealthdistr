export default function renderNews(news) {
    return `
     <section id = "news">
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

export function searchSort(data){
    let input = document.querySelector('input[type=search]');
    input.addEventListener('input',(event)=>{
        console.log(event.target.value);
        const filtered = data.news.filter(news=>news.title.toLowerCase().includes(event.target.value.toLowerCase()));
        document.querySelector('.news-list').innerHTML = renderNewsItems(filtered);
    });
}