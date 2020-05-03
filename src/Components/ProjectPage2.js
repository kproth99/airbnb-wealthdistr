export default function renderProjectPage2(d) {
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
            <div class="map"> 
            <style>.embed-container {position: relative; padding-bottom: 80%; height: 0; max-width: 100%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}</style><div class="embed-container"><small><a href="//lizzylovesdata.maps.arcgis.com/apps/Embed/index.html?webmap=a88dc2bf07174729986597150b4daa8d&extent=-73.9145,40.7773,-73.7768,40.8444&home=true&zoom=true&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&disable_scroll=true&theme=light" style="color:#0000FF;text-align:left" target="_blank">View larger map</a></small><br><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="NY airbnb prices" src="//lizzylovesdata.maps.arcgis.com/apps/Embed/index.html?webmap=a88dc2bf07174729986597150b4daa8d&extent=-73.9145,40.7773,-73.7768,40.8444&home=true&zoom=true&previewImage=true&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&disable_scroll=true&theme=light"></iframe></div>
                </div>
            <br>
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
