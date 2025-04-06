const absurdTheme = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ name }}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <style>
    @media(max-width: 500px) {
      .reverse-columns {
        flex-direction: column-reverse;
        display: flex;
      }
    }

    h1, .titled {
      font-family: 'Merriweather', serif !important;
      font-size: 58px !important;
      font-weight: 400 !important;
      line-height: 64px !important;
    }

    h2, .subtitled {
      font-family: 'Merriweather', serif !important;
      font-size: 22px !important;
      font-weight: 400 !important;
      line-height: 36px !important;
    }

    h3, h4, h5, h6{
      font-family: 'Merriweather', serif !important;
      font-size: 18px !important;
      font-weight: 400 !important;
      line-height: 30px !important;
    }

  </style>
</head>

<body class="">
  <!-- Hero -->
  <section class="hero has-background-grey-darker has-text-white is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns  is-vcentered reverse-columns">
          <div class="column
          is-10-mobile 
          is-10-tablet 
          is-5-desktop 
          is-5-widescreen 
          is-5-fullhd " data-aos="fade-down">
            <h1 class="title titled is-1 mb-6 has-text-white">
              {{ name }}
            </h1>
          </div>
          <div data-aos="fade-right" class="column
          is-10-mobile 
          is-10-tablet 
          is-4-desktop 
          is-7-widescreen 
          is-4-fullhd is-offset-1-fullhd">
            <figure class="image">
              <img height="300px" width="300px" style="border-radius: 2rem;" src="https://api.dicebear.com/9.x/identicon/svg?seed={{name}}">
            </figure>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section class="hero is-medium has-text-centered">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div data-aos="zoom-in-up" class="column is-8">
            <h1 class="title titled is-1 mb-6">
              <span id="typewriter"></span>
            </h1>
            <h2 class="subtitle subtitled">
              <div class="content has-text-centered">
                {{ editor | safe }}
              </div>
            </h2>
          </div>
        </div>

      </div>
    </div>
  </section>

  <footer class="footer" style="padding-bottom: 3rem;padding-top: 3rem;">
    <div class="content has-text-centered">
      <p>
        <a href="{{github}}">
          <img width="35px" height="35px" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/github-icon.svg">
        </a>

        <a href="{{instagram}}">
          <img width="35px" height="35px" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/instagram-icon.svg">
        </a>
      </p>
    </div>
  </footer>



  <script src="https://cdnjs.cloudflare.com/ajax/libs/TypewriterJS/2.13.1/core.min.js"></script>
  <script>
    new Typewriter('#typewriter', {
      strings: ['All About Me'],
      autoStart: true,
      loop: true,
    });
  </script>
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <!-- Highlight js-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js" integrity="sha512-gU7kztaQEl7SHJyraPfZLQCNnrKdaQi5ndOyt4L4UPL/FHDd/uB9Je6KDARIqwnNNE27hnqoWLBq+Kpe4iHfeQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/vs2015.min.css" integrity="sha512-mtXspRdOWHCYp+f4c7CkWGYPPRAhq9X+xCvJMUBVAb6pqA4U8pxhT3RWT3LP3bKbiolYL2CkL1bSKZZO4eeTew==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script>hljs.highlightAll();</script>
    <script>
    AOS.init({
      once: true
    });
  </script>
</body>

</html>`