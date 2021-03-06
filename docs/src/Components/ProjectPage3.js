export default function renderProjectPage(d) {
    document.querySelector(".container").innerHTML = `
    <nav>
            <ul>
                <li>
                    <a class="backtitle" href="index.html" top:30px>
                    <i class="fas fa-user-circle"></i> Go Back</a>
                </li>
            </ul>
        </nav>
        <h1 class="pagetitle">${d.title}</h1>
  <div>
            <div class="map"> 
                <style>.embed-container {position: relative; padding-bottom: 80%; height: 0; max-width: 80%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}</style><div class="embed-container"><small><a href="//lizzylovesdata.maps.arcgis.com/apps/Embed/index.html?webmap=3eacee614b304209a91aaad835860aab&extent=-122.4751,37.7363,-122.3803,37.7846&home=true&zoom=true&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&disable_scroll=true&theme=light" style="color:#0000FF;text-align:left" target="_blank">View larger map</a></small><br><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="SF airbnb prices" src="//lizzylovesdata.maps.arcgis.com/apps/Embed/index.html?webmap=3eacee614b304209a91aaad835860aab&extent=-122.4751,37.7363,-122.3803,37.7846&home=true&zoom=true&previewImage=true&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&disable_scroll=true&theme=light"></iframe></div>
                </div>
      <br>
<div>
      <div class ="pagetitle">
              How to Use the Map
      </div>
    <div class = "description"> ${d.description} </div>
  </div>
  <div>
  <br>
  <footer>Copyright © 2020 </footer>
  
  </div>
  <br>
  </div> `
}
