const glassTheme = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{name }}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <style>
        *{
            margin:0;
            box-sizing: border-box;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: white;
        }
        h2, h3, h4{
            padding-top: 1vh !important;
        }
        .background{
            background: rgba(255, 255, 255, 0.24);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(7.9px);
            -webkit-backdrop-filter: blur(7.9px);
            border: 1px solid rgba(255, 255, 255, 0.19);
            width: 95%;
            display: flex;
            justify-content: center;
            min-height: 96vh;
            margin-top: 1vh !important;
            margin: auto auto;
            flex-direction: row;
            flex-wrap: nowrap;
        }

        .background *{
            margin: 1% 1%;
        }
        body{
            display: flex;
            justify-content: center;
            background: rgb(118,217,112);
            background: radial-gradient(circle, rgba(118,217,112,1) 0%, rgba(84,150,80,1) 100%);
        }
        .background-image{
            object-fit: cover;
            background-repeat: no-repeat;
            background-position: center;
            position:absolute;
            top: 0;
            width: 100vw;
            height: 100vh;
        }

        .content hr{
            padding-top: 0 !important;
        }
        #splitter{
            height: 90vh;
            margin: 0 4%;
            margin-top: 2vh;
        }

        .content{
            flex: 94%;
            max-height: 95vh;
            max-width: 100%;
        }
        .content *{
            max-width: 90rem;
            padding-top: 1%;
            margin: 0 auto;
        }
        .nav{
            display: flex;
            flex: 2%;
            justify-content: center;
            text-align: center;
            max-width: min-content;
            flex-direction: column;
        }
        .nav ul{
            list-style: none;
            text-align: center;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0;
            flex-grow: 0;
        }

        .nav ul li{
            padding: 1rem;
            font-size: 2em;
        }

        .nav img{
            height: 25vh
        }

        /* Tablets/laptops */
        @media (max-width: 770px){
            .background{
                flex-direction: column;
            }
            #splitter {
                flex: 0;
                width: 90% !important;
            }
            .nav{
                max-height: 15vh;
                flex-direction: row;
                gap: 2%;
                max-width: 90%;
            }
            .nav img{
                height: 15vh;
            }
            .nav *{
                max-height: 14vh;
            }
            .nav ul li{
                padding: 8px;
            }
            .content{
                margin-top: 3vh;
            }
            .nav ul{
                flex-direction: row;
                padding-top: 3vh;
            }
            .nav h1{
                padding-top: 3.5vh;
                font-size: 1.5em;
            }
        }

        /* Tablets */
        @media (max-width: 560px){
            .background{
                flex-direction: column;
            }
            #splitter{
                flex: 0;
                width: 95% !important;
            }
            .nav{
            max-height: 10vh;
            flex-direction: row;
            }
            .nav img{
                height: 10vh;
            }
            .nav ul li{
                padding: 2px;
            }
            .content{
                margin-top: 1vh;
            }
            .nav ul{
                flex-direction: row;
                padding-top: 3vh;
            }
            .nav h1{
                padding-top: 2vh;
                font-size: large;
            }
        }

        /*Large Phones & Tablets*/
        @media (max-width: 476px){
            .background{
                flex-direction: column;
            }
            #splitter{
                flex: 0;
                width: 95% !important;
            }
            .nav{
            max-height: 10vh;
            flex-direction: row;
            }
            .nav img{
                height: 7vh;
                margin-top: 1vh
            }
            .nav ul li{
                padding: 2px;
                font-size: 1.5em;
            }
            .content{
                margin-top: 1vh;
            }
            .nav ul{
                flex-direction: row;
                padding-top: 3vh;
            }
            .nav h1{
                margin-top: 1vh;
                font-size: x-large;
            }
        }

        /*Phones*/
        @media (max-width: 380px){
            .background{
                flex-direction: column;
            }
            #splitter{
                flex: 0;
                width: 95% !important;
            }
            .nav{
            max-height: 6vh;
            flex-direction: row;
            gap: 1%;
            }
            .nav img{
                height: 5vh;
                margin-top: .5vh
            }
            .nav ul li{
                padding: 1px;
                font-size: large;
            }
            .content{
                margin-top: 1vh;
            }
            .nav ul{
                flex-direction: row;
                padding-top: 3vh;
            }
            .nav h1{
                margin-top: 1vh;
                font-size: medium;
            }
        }

    </style>
</head>
<body>
    <img id="background-image" class="background-image" src="{{variant}}">

    <div class="background">
        <div class="nav">
        {% if preview %}
            <img src="https://api.dicebear.com/9.x/identicon/svg?seed={{name}}" style="border-radius: 50%; max-height: 25vh;">
        {% else %}
            <img src="{{ avatar }}" style="border-radius: 50%; max-height: 25vh;">
        {%endif %}
            <h1>{{name}}</h1>
            <ul>
                <li><a href="{{github}}" target="_blank"><i class="bi bi-github"></i></a></li>
                <li><a href="{{ instagram }}" target="_blank"><i class="bi bi-instagram"></i></a></li>
                <!-- <li>Canadian Coding</li> -->
            </ul>
        </div>

        <hr id="splitter">

        <div class="content">
            {{ editor | safe }}
        </div>
    </div>
    <!-- Highlight js-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js" integrity="sha512-gU7kztaQEl7SHJyraPfZLQCNnrKdaQi5ndOyt4L4UPL/FHDd/uB9Je6KDARIqwnNNE27hnqoWLBq+Kpe4iHfeQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/vs2015.min.css" integrity="sha512-mtXspRdOWHCYp+f4c7CkWGYPPRAhq9X+xCvJMUBVAb6pqA4U8pxhT3RWT3LP3bKbiolYL2CkL1bSKZZO4eeTew==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script>hljs.highlightAll();</script>
  </body>
</html>`