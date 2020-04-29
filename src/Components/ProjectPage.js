export default function renderProjectPage(d) {
    document.querySelector(".container").innerHTML = `
    <nav>
            <ul>
                <li>
                    <a class="title" href="index.html" top:30px>
                    <i class="fas fa-user-circle"></i> Go Back</a>
                </li>
            </ul>
        </nav>
        <div>
      <div class="title"><h1 "${d.id}" ${d.title} </h1></div>
  </div>
  <div class="row">
      <div class="col-6">
        <img src="${d.teaser1}" style="width: 30%; margin-left: 10px; border-radius: 25px" /> 
      </div>
      
  </div>
  <div>
          <div class="authors" style="text-align:left"> ${d.authors} </div>
          <div class="source" style="text-align:left"> 
              <em>${d.source}</em> 
          </div>

          
      </div>
      <br>
  <div>
    <div class = "description"> ${d.description} </div>
  </div>
    <br>
    <div class="label" style="text-align:left">
    <span><a href="${d.materials[0].path}"> <i class="${d.icon1}"></i> 
        ${d.materials[0].label} </a>
    </span> |
    <span><a href="${d.materials[1].path}"> <i class="${d.icon2}"></i> 
        ${d.materials[1].label} </a>
    </span>
</div>
  
  <div>
  <br>

  <footer>Copyright © 2020 Kieran Roth</footer>
  
  </div>
  <br>
  </div> `
}
