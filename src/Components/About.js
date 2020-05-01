import sample from 'lodash/sample';

export default function renderAbout(about) {
    return (
        
            ` <div class="parallax"></div>
            <section id="about">
            
            <h1 class="animated infinite flash delay-3s">Airbnb Price</h1>
            <div id="about" class="row">
                    <div class="col-6">
                        <img class="profile-img" src="${sample(about.photos)}" width="200" height="300">
                        <p>
                            <strong> This is our project about Airbnb and Price Distribution</strong><br>
                            rothki@bc.edu<br>
                            140 Commonwealth Avenue, Chestnut Hill, MA 02467<br>
                            <a href="assets/Kieran Roth Resume.pdf" target="_blank"><i class="far fa-file-alt"></i> Resume | </a>
                            <a href="https://www.instagram.com/kproth99/" target="_blank">
                                <i class="fab fa-instagram"></i> | </a>
                            <a href="https://www.linkedin.com/in/kieran-roth-8aaa51189/" target="_blank">
                                <i class="fab fa-linkedin"></i>
                            |</a> <br>
    
                        </p>
                    </div>
                    <div class="col22">
                        <p>
                            We love Airbnb!
                             
                        </p>       
                    </div>
    
                </div>
            `
    );
}