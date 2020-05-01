import sample from 'lodash/sample';

export default function renderAbout(about) {
    return (
            ` 
            <section id="about">
            <div id="about" class="row">
                    
                    <div class="col-6">
                    <strong> Meet our Group Members!</strong><br>
                         <div class="row1">
                            <div class="column1">
                        <img class="profile-img" src="${about.photo1}" >
                        <figcaption> <strong> Kieran Roth </strong> <br> Class of 2021 <br> B.S. in Computer Science; B.S. in Marketing </figcaption>
                        <a href="https://www.linkedin.com/in/kieran-roth-8aaa51189/" target="_blank">
                        <i  class="fab fa-linkedin"></i> LinkedIn</a> 
                            </div>
                            <div class="column1">
                                <img class="profile-img" src="${about.photo2}" >
                                    <figcaption> <strong> Lizzie Hanley </strong> <br> Class of 2020 <br> B.A. in Computer Science; B.S. in Management, Concentrations in Finance & Information Systems </figcaption>
                                    <a href="https://www.linkedin.com/in/kieran-roth-8aaa51189/" target="_blank">
                        <i  class="fab fa-linkedin"></i> LinkedIn</a> 
                            </div>
                            <div class="column1">
                                    <img class="profile-img" src="${about.photo4}" >
                                 <figcaption> <strong> Kevin Li </strong> <br> Class of 2020 <br> B.A. in Computer Science </figcaption>
                                 <a href="https://www.linkedin.com/in/kieran-roth-8aaa51189/" target="_blank">
                        <i  class="fab fa-linkedin"></i> LinkedIn</a> 
                            </div>
                            <div class="column1">
                                    <img class="profile-img" src="${about.photo3}" >
                                 <figcaption> <strong> Catriona Sullivan </strong> <br> Class of 2020 <br> B.A. in Computer Science </figcaption>
                                 <a href="https://www.linkedin.com/in/kieran-roth-8aaa51189/" target="_blank">
                        <i  class="fab fa-linkedin"></i> LinkedIn</a> 
                            </div>
                        </div>
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