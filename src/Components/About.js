

export default function renderAbout(about) {
    return (
            `
            <section id="about">
            <div class=headertitle><strong> Meet our Group Members!</strong><br> </div>
            <div id="about" class="row">
            <div class="col-62">
                 <img class="profile-img" src="${about.photo1}" >
                 <figcaption> <strong> Kieran Roth </strong> <br> Class of 2021 <br> B.S. in Computer Science; B.S. in Marketing </figcaption>
                     <a href="https://www.linkedin.com/in/kieran-roth-8aaa51189/" target="_blank">
                 <i  class="fab fa-linkedin"></i> LinkedIn</a> 
                </div>
            <div class="col-62">
            <img class="profile-img" src="${about.photo2}" >
            <figcaption> <strong> Lizzy Hanley </strong> <br> Class of 2020 <br> B.A. in Computer Science; B.S. in Management, Concentrations in Finance & Information Systems </figcaption>
            <a href="https://www.linkedin.com/in/lizzyhanley/" target="_blank">
            <i  class="fab fa-linkedin"></i> LinkedIn</a> 
            </div>
            <div class="col-62">
            <img class="profile-img" src="${about.photo4}" >
                <figcaption> <strong> Kevin Li </strong> <br> Class of 2020 <br> B.A. in Computer Science </figcaption>
            </div>
            <div class="col-62">
            <img class="profile-img" src="${about.photo3}" >
                <figcaption> <strong> Catriona Sullivan </strong> <br> Class of 2020 <br> B.A. in Computer Science </figcaption>   
                <a href="https://www.linkedin.com/in/catriona-sullivan-844878153/" target="_blank">
                <i  class="fab fa-linkedin"></i> LinkedIn</a>  
        </div> 
        </div>
        <h1 class="title">About</h1>
         <div class="abstract">
         ${about.desc} 
         <p>
        </section>
            
            `
    );
}