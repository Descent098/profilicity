const showcaseTheme = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{{name}}</title>
    <!-- Bulma Version 0.9.0-->
    <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
    <script
      src="https://kit.fontawesome.com/2828f7885a.js"
      integrity="sha384-WAsFbnLEQcpCk8lM1UTWesAf5rGTCvb2Y+8LvyjAAcxK1c3s5c0L+SYOgxvc6PWG"
      crossorigin="anonymous"
    ></script>
    <style>
        @import url("https://fonts.googleapis.com/css?family=Lato|Poppins|Kaushan+Script");
.has-vertically-aligned-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

* {
  box-sizing: border-box;
}

html {
  font-family: 'Poppins', Lato, Tahoma, sans-serif;
  width: 100%;
  min-height: 100%;
}

.header-wrapper {
  padding-bottom: 30px;
}

.hero {
  background-image: url({{variant}});
  background: linear-gradient(rgba(31, 44, 108, 0.65), rgba(31, 44, 108, 0.65)), rgba(0, 0, 0, 0.55) url("{{variant}}") no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: white;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-family: 'Poppins', sans-serif;
}

.hero .title {
  font-family: 'Kaushan Script', sans-serif;
  transform: rotate(-5deg);
  font-size: 5rem;
  color: whitesmoke;
}

.hero .subtitle {
  padding: 5px;
  color: whitesmoke;
}

.hero .profession {
  padding-top: 50px;
  font-size: 1.7rem;
  text-transform: uppercase;
}

.hero .hero-foot {
  height: 50px;
  background: white;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.082);
}

@media (max-width: 599px) {
  .hero .hero-foot {
    display: none;
  }
}

.hero .hero-foot .hero-foot--wrapper {
  margin: 7px auto;
  height: 50px;
}

.hero .hero-foot .hero-foot--wrapper .hero-menu-desktop {
  line-height: 38px;
  font-weight: 600;
  text-transform: lowercase;
  letter-spacing: 1px;
  font-size: 1rem;
}

.hero .hero-foot .hero-foot--wrapper .hero-menu-desktop ul li {
  display: inline-block;
  padding-right: 15px;
  padding-left: 15px;
}

.hero .hero-foot .hero-foot--wrapper .hero-menu-desktop ul li.is-active a {
  border-bottom: 2px solid #1f2c6c;
}

.hero .hero-foot .hero-foot--wrapper .hero-menu-desktop ul li a {
  color: #1f2c6c;
}

.hero .hero-foot .hero-foot--wrapper .hero-menu-desktop ul li a:hover {
  color: #1f2c6c;
  transition: all .2s ease-in-out;
  border-bottom: 2px solid #1f2c6c;
}

.main-content {
  padding-top: 2rem;
  color: #3c4172;
  font-family: 'Poppins', sans-serif;
}

.main-content .section-dark {
  background-color: #f0f3f5;
  padding: 60px 0px;
}

.main-content .section-dark.resume {
  height: 400px;
  padding-top: 100px;
}

@media (max-width: 599px) {
  .main-content .section-dark.resume {
    padding-top: 75px;
  }
}

.main-content .section-dark.resume .title {
  padding: 20px;
}

.main-content .section-dark.resume button {
  border: 2px solid #43485c;
  background: white;
  color: #43485c;
  height: 50px;
  width: 250px;
  font-size: 1rem;
  text-transform: uppercase;
}

.main-content .section-dark.resume .fa-download {
  color: #1f2c6c;
}

.main-content .section-dark.my-work {
  padding: 120px;
}

@media (max-width: 599px) {
  .main-content .section-dark.my-work {
    padding: 75px 20px;
  }
}

.main-content .section-dark.my-work .work-item {
  margin-bottom: 1rem;
  -webkit-transition: all .1s ease-in-out;
  transition: all .1s ease-in-out;
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 5px 20px rgba(14, 25, 80, 0.3);
}

.main-content .section-dark.my-work .work-item:hover {
  -webkit-transform: scale(1.055) translateY(-2px);
  transform: scale(1.055) translateY(-2px);
  -webkit-box-shadow: 0 2px 25px 0 rgba(30, 30, 30, 0.1);
  box-shadow: 0 2px 25px 0 rgba(30, 30, 30, 0.1);
}

.main-content .section-light {
  padding: 30px;
}

.main-content .section-light.about-me {
  padding-bottom: 100px;
}

.main-content .section-light.about-me .is-larger {
  font-size: 1.2rem;
}

@media (max-width: 599px) {
  .main-content .section-light.about-me .about-links {
    text-align: center;
  }
}

.main-content .section-light.about-me .right-image img {
  border-radius: 11px;
  margin: 20px;
  box-shadow: 0 5px 20px rgba(14, 25, 80, 0.3);
}

@media (max-width: 599px) {
  .main-content .section-light.about-me .right-image img {
    margin: auto;
  }
}

.main-content .section-light.skills {
  padding: 100px;
}

@media (max-width: 599px) {
  .main-content .section-light.skills {
    padding: 50px 20px 40px 20px;
    padding-bottom: 20px;
  }
}

.main-content .section-light.skills h1 {
  padding: 10px;
}

.main-content .section-light.contact {
  padding: 200px;
}

.main-content .section-light.contact button {
  width: 100%;
  background-color: #43485c;
  color: white;
  height: 50px;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 599px) {
  .main-content .section-light.contact {
    padding: 60px 20px;
  }
}

.main-content .section-color.services {
  padding: 100px;
  background-color: #43485c;
  color: white;
}

.main-content .section-color.services .title,
.main-content .section-color.services .subtitle {
  color: white;
}

.main-content .section-color.services i {
  font-size: 3rem;
  padding: 20px;
}

.main-content .section-title {
  color: #43485c;
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 2px;
  padding-bottom: 30px;
}

.footer {
  bottom: 0;
  width: 100vw;
  padding: 0;
  height: 80px;
  line-height: 25px;
  text-align: center;
  background: #1f2c6c;
  color: whitesmoke;
  padding-top: 2rem;
}

.footer a {
  color: lightgrey;
}

.footer a img {
  vertical-align: middle;
  padding: 3px;
  background: white;
  border-radius: .5em;
}

.footer a i {
  font-size: 1.5rem;
  padding: 0px 10px;
}

.footer a .nav-item {
  color: whitesmoke;
}

.fa-download {
  color: #43485c;
}

#toTop {
  height: 50px;
  width: 50px;
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: rgba(31, 44, 108, 0.65);
  color: white;
  cursor: pointer;
  border-radius: 50%;
  font-size: 2rem;
  box-shadow: 0 5px 20px rgba(14, 25, 80, 0.3);
}

#toTop a {
  color: white;
}

#toTop:hover {
  background-color: #43485c;
}

::-webkit-scrollbar {
  width: 8px;
  background-color: rgba(245, 245, 245, 0);
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #43485c;
}

body.preloader-site {
  overflow: hidden;
}

.preloader-wrapper {
  height: 100%;
  width: 100%;
  background: #1f2c6c;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
}

.preloader-wrapper .preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 120px;
}

.white
{color:ghostwhite}
#content h2{
  font-size: 22px !important;
  font-weight: 400 !important;
  line-height: 36px !important;
}

#content h3, h4, h5, h6{
  font-size: 18px !important;
  font-weight: 200 !important;
  line-height: 30px !important;
}

footer div a{
  padding:2px;
  background-color:white;
  border-radius: 2rem;
}

#content{
  width: 100%
}
    </style>
  </head>

  <body>
    <!-- Begin Preloader -->
    <div class="preloader-wrapper">
      <div class="preloader">
        <img src="img/preloader.gif" alt="" />
      </div>
    </div>
    <!-- End Preloader-->
    <!-- Begin Scroll Up Button -->

    <form action="#home">
      <button id="toTop" title="Go to top">
        <i class="fas fa-angle-up"></i>
      </button>
    </form>
    <!-- End Scroll Up Button -->

    <!-- Begin Header -->
    <div class="header-wrapper" id="home">
      <!-- Begin Hero -->
      <section class="hero is-large">
        <!-- Begin Mobile Nav -->
        <nav class="navbar is-transparent is-hidden-desktop">
          <!-- Begin Burger Menu -->
          <div class="navbar-brand">
            <div class="navbar-burger burger" data-target="mobile-nav">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <!-- End Burger Menu -->
          <div id="mobile-nav" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item">
                <a class="navbar-item" href="#home">
                  Home
                </a>
              </div>
              <div class="navbar-item">
                <a class="navbar-item" href="#services">
                  About
                </a>
              </div>
              <div class="navbar-item">
                <a class="navbar-item" href="#skills">
                  Skills
                </a>
              </div>
            </div>
          </div>
        </nav>
        <!-- End Mobile Nav -->
        <!-- Begin Hero Content-->
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="subtitle">Hey there, I'm</h1>
            <h2 class="title">{{name}}</h2>
            <!-- <h1 class="subtitle profession">A UI/UX Designer</h1> -->
          </div>
        </div>
        <!-- End Hero Content-->
        <!-- Begin Hero Menu -->
        <div class="hero-foot ">
          <div class="hero-foot--wrapper">
            <div class="columns">
              <div class="column is-12 hero-menu-desktop has-text-centered">
                <ul>
                  <li class="is-active">
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#services">About</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- End Hero Menu -->
      </section>
      <!-- End Hero -->
    </div>
    <!-- End Header -->

    <!-- Begin Main Content -->
    <div class="main-content">
      <!-- Begin About Me Section -->
      <div class="section-light about-me" id="about-me">
        <div class="container">
          <div class="column is-12 about-me">
            <h1 class="title has-text-centered section-title"></h1>
          </div>
          <div class="columns is-multiline">
            <div
              class="column is-6 has-vertically-aligned-content"
              data-aos="fade-right"
            >
              <p class="is-larger">
                &emsp;&emsp;<strong
                  >Showcase is a modern, beautiful personal website template to
                  showcase who you are, as well as projects you've worked on in
                  the past.</strong
                >
              </p>
              <br />
              <p>
                Showcase was built from the ground up with Bulma to be fast and
                responsive out of the box with all source files well documented
                for easy to customization. The Showcase template gives you a
                personal space to share what you are all about as a creative
                designer, developer, photographer, and more!
              </p>
              <br />
              <div class="is-divider"></div>
              <div class="columns about-links">
                <div class="column">
                  <p class="heading">
                    <strong>Give me a ring</strong>
                  </p>
                  <p class="subheading">
                    123-456-7890
                  </p>
                </div>
                <div class="column">
                  <p class="heading">
                    <strong>Email Me</strong>
                  </p>
                  <p class="subheading">
                    hello@example.com
                  </p>
                </div>
                <div class="column">
                  <p class="heading">
                    <strong>View my portfolio</strong>
                  </p>
                  <p class="subheading">
                    example.com
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-6 right-image " data-aos="fade-left">
              <img
                class="is-rounded"
                src="https://api.dicebear.com/9.x/initials/svg?seed={{name}}"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- End About Me Content -->
      <div class="section-dark resume">
        <div class="container">
          <div
            class="columns is-multiline"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <div class="column is-12 about-me">
              <h1 class="title has-text-centered section-title">
                View My Resume
              </h1>
            </div>
            <div class="column is-10 has-text-centered is-offset-1">
              <h2 class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et doloremagna aliqua
              </h2>
              <form action="example.docs">
                <button class="button">
                  Download Resume&emsp;<i class="fad fa-download fa-lg"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Begin Services Content -->
      <div class="section-color services" id="services">
        <div class="container">
          <div class="columns is-multiline">
            <div
              class="column is-12 about-me"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <h1 class="title has-text-centered section-title">About Me!</h1> 
              <hr />
            </div>
            <div class="columns" data-aos="fade-in" data-aos-easing="linear" style="width: 100%;">
                <div id="content" class="column is-12 has-text-centered" style="width: 100%;">
                  {{ editor | safe }}
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Services Content -->
      <!-- Begin Skills Content -->
      <div class="section-light skills" id="skills">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-12 about-me">
              <h1 class="title has-text-centered section-title">Skills</h1>
            </div>
            <div
              class="column is-6"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <h1>Adobe Experience Design</h1>
              <progress class="progress" value="70" max="100">30%</progress>
              <h1>Adobe After Effects</h1>
              <progress class="progress" value="65" max="100">30%</progress>
              <h1>Visual Studio Code</h1>
              <progress class="progress" value="58" max="100">45%</progress>
              <h1>Sketch</h1>
              <progress class="progress" value="90" max="100">60%</progress>
            </div>
            <div
              class="column is-6"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <h1>HTML</h1>
              <progress class="progress" value="85" max="100">30%</progress>
              <h1>CSS</h1>
              <progress class="progress" value="95" max="100">30%</progress>
              <h1>VueJS</h1>
              <progress class="progress" value="70" max="100">45%</progress>
              <h1>React</h1>
              <progress class="progress" value="60" max="100">60%</progress>
            </div>
          </div>
        </div>
      </div>
      <!-- End Skills Content -->

    </div>
    <!-- End Main Content -->

    <!-- Begin Footer -->
    <footer class="footer has-background-black has-text-white">
            <a href="{{github}}">
              <img width="35px" height="35px" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/github-icon.svg">
            </a>

            <a href="{{instagram}}">
              <img width="35px" height="35px" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/instagram-icon.svg">
            </a>
    </footer>
    <!-- End Footer -->

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">
    <script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>
    <script>
        // Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function($el) {
        $el.addEventListener("click", function() {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
  
  // Smooth Anchor Scrolling
  $(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      500
    );
  });
  
  // When the user scrolls down 20px from the top of the document, show the scroll up button
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("toTop").style.display = "block";
    } else {
      document.getElementById("toTop").style.display = "none";
    }
  }
  
  // Preloader
  $(document).ready(function($) {
    $(".preloader-wrapper").fadeOut();
    $("body").removeClass("preloader-site");
  });
  $(window).on("load", function() {
    var Body = $("body");
    Body.addClass("preloader-site");
  });
  
      AOS.init({
        easing: "ease-out",
        duration: 800,
      });
    </script>
    <!-- Highlight js-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js" integrity="sha512-gU7kztaQEl7SHJyraPfZLQCNnrKdaQi5ndOyt4L4UPL/FHDd/uB9Je6KDARIqwnNNE27hnqoWLBq+Kpe4iHfeQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/vs2015.min.css" integrity="sha512-mtXspRdOWHCYp+f4c7CkWGYPPRAhq9X+xCvJMUBVAb6pqA4U8pxhT3RWT3LP3bKbiolYL2CkL1bSKZZO4eeTew==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script>hljs.highlightAll();</script>
  </body>
</html>`
