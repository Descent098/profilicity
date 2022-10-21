
user = {}

function initializeEditor(){
    // Initializes the editor
    user["name"] = document.getElementById("name").value
    user["github"] = document.getElementById("github").value
    user["instagram"] = document.getElementById("instagram").value
    user["theme"] = document.getElementById("theme").value
    user["avatar"] = {'name':"https://avatars.dicebear.com/api/identicon/name.svg"}

    // Fill Empty values
    if (!user["name"]){
        user["name"] = "John Doe";
        document.getElementById("name").value = "John Doe"
    }

    if (!user["github"]){
        user["github"] = "https://github.com/user";
        document.getElementById("github").value = "https://github.com/user"
    }

    if (!user["instagram"]){
        user["instagram"] = "https://instagram.com/user";
        document.getElementById("instagram").value = "https://instagram.com/user"
    }

    // Initialize editorjs

    const editor = new EditorJS({ 
        /** 
         * Id of Element that should contain the Editor 
         */ 
        holder: 'editorjs', 
        
        /** 
         * Available Tools list. 
         * Pass Tool's class or Settings object for each Tool you want to use 
         */ 
        tools: { 
            heading: Header
        },

        onReady: () => {parseEditor(editor)},

        onChange: (api, event) => {
            parseEditor(editor)
            renderPreview()
            console.log('Now I know that Editor\'s content changed!', event)
        },

        data: {
            blocks: [
                {
                type: "heading",
                data: {
                    text: "About me",
                    level: 2
                    }
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad perspiciatis deserunt deleniti porro vel similique, omnis esse cupiditate impedit ab, hic libero. Voluptate non fugit accusantium possimus cupiditate repellendus debitis.",
                        }
                    },

                {
                    type: "heading",
                    data: {
                        text: "Education",
                        level: 2
                        }
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad perspiciatis deserunt deleniti porro vel similique, omnis esse cupiditate impedit ab, hic libero. Voluptate non fugit accusantium possimus cupiditate repellendus debitis.",
                            }
                        },
            ],
        }



    })

    // html=`<html><head><title>yeet</title></head><body><h1>Hello World!!</h1></body></html>`
    // document.getElementById("preview-pane").src = `data:text/html,${encodeURIComponent(html)}`
    document.getElementById("preview-pane").src = "https://kieranwood.ca/glass-portfolio"
}

function changeFormElement(element){
    if (element.id === "avatar"){
        // Uploaded new avatar
        user[element.id] = element.files[0]
        reader = new FileReader();
        newAvatar = document.getElementById("avatar").files[0]

        // Set avatar to new image
        reader.readAsDataURL(newAvatar);
        reader.onload = function(e){
            document.getElementById("avatar-display").src = e.target.result
        }

        // Save avatar as file
        saveAs(newAvatar, "image.jpg")
    } else if (document.getElementById("avatar-display").src.includes("dicebear") & element.id === "name"){
        // Reset avatar to use new name as seed
        user[element.id] = element.value
        document.getElementById("avatar-display").src=`https://avatars.dicebear.com/api/identicon/${user['name']}.svg`
    } else{
        user[element.id] = element.value
    }
}


function renderPreview(){
    // Renders the preview and returns it
    
    template = `<h1>{{ name | escape }}</h1>
    <h2>{{ instagram | escape }}</h2>
    <h2>{{ github | escape }}</h2>
    <h2>{{ theme | escape }}</h2>

    <img src="img/{{ avatar.name }}">

    {{ editor | safe }}
    `

    zip = new JSZip();
    zip.file("index.html", nunjucks.renderString(template, user));
    img = zip.folder("img");

    if (user["avatar"].name.startsWith("https://avatars.dicebear.com")){

        fetch(user["avatar"]["name"]).then(function (response) {
            // The API call was successful!
            return response.text();
        }).then(function (html) {
            // This is the HTML from our response as a text string

            //TODO  Fix this
            console.log(img)
            img.file("smile.svg", html, {text:true});
            console.log(img)
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
    }else{
        
        newAvatar = document.getElementById("avatar").files[0]
        img.file("smile.jpg", newAvatar, {base64: true}); // TODO Add support for more than jpg

    }
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        // see FileSaver.js
        saveAs(content, "example.zip");
    });

    return nunjucks.renderString(template, user)

    

}

function parseEditor(editor){
    // Parses the editor js editor and stores HTML string to user["editor"]

    result = ""
    editor.save().then((outputData) => {
        for (let block of outputData.blocks) {
            block.data // This is the data section
            switch(block.type){
                case "heading":
                    result += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`
                    break;

                case "paragraph":
                    result += `<p>${block.data.text}</p>`
                    break
            }
        }
        user["editor"] = result
        console.log(renderPreview())
    }).catch((error) => { // If there's an error
        console.log('Saving failed: ', error)
    })
    
}
