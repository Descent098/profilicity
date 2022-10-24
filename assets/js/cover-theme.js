const coverTheme =`<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ name }}</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <!-- Bulma Version 0.9.0-->
    <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
    <style type="text/css">
        html,
        body {
            font-family: 'Open Sans';
        }

        img {
            padding: 5px;
        }
        #avatar{
            border-radius: 20%;
        }

        h1{
            font-size: 58px !important;
            font-weight: 600 !important;
            line-height: 64px !important;
        }

        h2{
            font-size: 22px !important;
            font-weight: 400 !important;
            line-height: 36px !important;
        }

        h3, h4, h5, h6{
            font-size: 18px !important;
            font-weight: 200 !important;
            line-height: 30px !important;
        }
    </style>
</head>

<body>
    <section class="hero is-fullheight is-default is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5">
                            <img id="avatar" src="https://avatars.dicebear.com/api/identicon/{{name}}.svg" alt="Description">
                    </div>
                    <div class="column is-6 is-offset-1">
                        <h1 class="title is-2">
                            {{ name }}
                        </h1>
                        <h2 class="subtitle is-4">
                            Let this cover page describe a product or service.
                        </h2>
                        <br>
                    </div>
                </div>
            </div>
        </div>

        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="content has-text-centered">
                {{ editor | safe }}
                </div>
            </div>
        </div>

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
    </section>
    <!-- Highlight js-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js" integrity="sha512-gU7kztaQEl7SHJyraPfZLQCNnrKdaQi5ndOyt4L4UPL/FHDd/uB9Je6KDARIqwnNNE27hnqoWLBq+Kpe4iHfeQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/vs2015.min.css" integrity="sha512-mtXspRdOWHCYp+f4c7CkWGYPPRAhq9X+xCvJMUBVAb6pqA4U8pxhT3RWT3LP3bKbiolYL2CkL1bSKZZO4eeTew==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script>hljs.highlightAll();</script>
</body>

</html>`
