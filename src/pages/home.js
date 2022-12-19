import React from 'react';

class Home extends React.Component {
    render(){
        return(
   <div>
    <header id = "header" class = "vh-100 flex">
        <div class = "container">
    <div class = "header-content">
        <h1>I'm a <br></br></h1><h2>Web developer,Programmer,Explorer</h2>
        <h3>Nithish kumar</h3>

        <ul class = "social-links">
            <li>
                <a href = "https://github.com/Nithishkumar19" target="_blank" class = "flex">
                    <i class = "fab fa-github"></i>
                </a>
            </li>
            <li>
                <a href = "https://twitter.com/Nithish_1917" target="_blank" class = "flex">
                    <i class = "fab fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href = "https://www.linkedin.com/in/nithish-kumar-r19/" target="_blank" class = "flex">
                    <i class = "fab fa-linkedin"></i>
                </a>
            </li>
           
        </ul>
    </div>
</div>
</header>
<main>

<section id = "about" class = "about py-7">
    <div class = "container">
        <div class = "about-content grid">
            <div class = "about-left">
                <img src = "assets/images/about-pic.jpg" alt = ""/>
            </div>
            <div class = "about-right">
                <div class = "title">
                    <h2>About Me</h2>
                </div>
                <p class = "lead">I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.I can provide clean code and pixel perfect design.</p>
                <p class = "lead"> I also make the website more and more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.</p>
                <a href = "#work" class = "btn-down">
                    <i class = "fas fa-chevron-down"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<section id = "work" class = "vh-100 flex py-7">
    <div class = "container">
        <div class = "work-content">
             <div class = "title">
                <h2>My skills</h2>
             </div>
             <ul class = "work-top grid">
                <li class = "lead"><i class = "fas fa-dot-circle"></i> C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential.</li>
                  <div class = "work-bottom grid">
                     <div>
                        <span class = "icon"><img src = "assets/images/skill-1.png"/></span>
                        <h3>C</h3>
                     </div>
                  </div>
                <li class = "lead"><i class = "fas fa-dot-circle"></i> The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</li>
                <div class = "work-bottom grid">
                
                    <div>
                        <span class = "icon"><img src = "assets/images/skill-2.png"/></span>
                        <h3>HTML</h3>
                    </div>
                </div>
                <li class = "lead"><i class = "fas fa-dot-circle"></i> Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</li>
                        <div class = "work-bottom grid">
                            <div>
                                <span class = "icon"><img src = "assets/images/skill-3.png"/></span>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </ul>
                    </div>
                    <a href = "#portfolio" class = "btn-down btn-down-white">
                        <i class = "fas fa-chevron-down"></i>
                    </a>
                </div>

        </section>

        <section id = "portfolio" class = "vh-100 py-7">
            <div class = "container">
                <div class = "portfolio-content">
                    <div class = "title">
                        <h2>my last works</h2>
                        <a href = "#contact" class = "btn-down">
                            <i class = "fas fa-chevron-down"></i>
                        </a>
                    </div>

                    <div class = "portfolio-grid grid">
                        <div><a href="https://github.com/Nithishkumar19/Web-course-registration" target="_blank" ><img src = "assets/images/project1.png"/></a></div>
                       
                        <div><a href="https://github.com/Nithishkumar19/youtube" target="_blank" ><img src = "assets/images/project2.png"/></a></div>
                        
                    </div>
                </div>
            </div>
        </section>
        
        <section id = "contact" class = "py-7">
            <div class = "container">
                <div class = "contact-content flex">
                    <div class = "contact-left">
                        <div class="title">
                            <h2><br></br><br/>contact me</h2>
                        </div>
                        <h2> <i class = "fas fa-phone-alt"></i> +91 75488 61618</h2>
                         <h2><a href="mailto:nithishkumar1904@gmail.com"class = "lead"><i class = "fas fa-envelope"></i> nithishkumar1904@gmail.com</a></h2>
                    </div>

                    <div class = "contact-right">
                        <img src = "assets/images/contact-pic.jpg" alt = "contact image"/>
                    </div>
                </div>
            </div>
        </section>
</main>
    <footer id = "footer" class = "py-7">
        <div class = "container">
            <div class = "footer-content">
                <div>
                    <h3>NITHISH KUMAR</h3>
                    <div>
                        <img src = "assets/images/about-pic.jpg"/>
                        </div>
                </div>

                <div>
                    <h3>Links</h3>
                    <ul class = "flex">
                        <li><a href = "#about">About Me</a></li>
                        <li><a href = "#work">Skills</a></li>
                        <li><a href = "#portfolio">Projects</a></li>
                        <li><a href = "#contact">Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
        </div>
       
        );
    }
}
export default Home;