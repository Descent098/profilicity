
user = {}

// Find better way to do this

backgrounds = {
    "Green": "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "Green-2": "https://images.unsplash.com/photo-1490780960365-b5e36e1d824c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "Green-3": "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Green-4": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "Green-5": "https://images.unsplash.com/photo-1663094456673-cb6234b45d92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Green-6": "https://images.unsplash.com/photo-1620144322949-29c9fee9094e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "Mountain": "https://images.unsplash.com/photo-1663875967691-15b02702931c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Mountain-2": "https://images.unsplash.com/photo-1663875972135-bb6654ed702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "Mountain-3": "https://images.unsplash.com/photo-1663269572021-7fc67e9ce3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    "Mountain-4": "https://images.unsplash.com/photo-1664521081309-57c84a924012?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Mountain-5": "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Mountain-6": "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Mountain-7": "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Mountain-8": "https://images.unsplash.com/photo-1589405858862-2ac9cbb41321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Mountain-9": "https://images.unsplash.com/photo-1575406965388-5350dc952c3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1477&q=80",



    "Space": "https://images.unsplash.com/photo-1662992672853-62155b6c3ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Space-1": "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
    "Space-2": "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    "Space-3": "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Space-4": "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Space-5": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    "Space-6": "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Space-7": "https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1807&q=80",
    "Space-8": "https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    "Space-9": "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "Space-10": "https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "Space-11": "https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Space-12": "https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80",
    "Space-13": "https://images.unsplash.com/photo-1583446689741-b39fa2703b22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1407&q=80",
    "Space-14": "https://images.unsplash.com/photo-1568473648251-3a0c3aa56192?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80",
    "Space-15": "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
}

function initializeEditor(){
    // Initializes the editor
    user["name"] = document.getElementById("name").value
    user["github"] = document.getElementById("github").value
    user["instagram"] = document.getElementById("instagram").value
    user["theme"] = document.getElementById("theme").value
    user["avatar"] = {'name':"https://avatars.dicebear.com/api/identicon/name.svg"}
    user["theme-variant"] = backgrounds["Green"]

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

    renderPreview()
    // document.getElementById("preview-pane").src = "https://kieranwood.ca/glass-portfolio"
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
    } else if (document.getElementById("avatar-display").src.includes("dicebear") & element.id === "name"){
        // Reset avatar to use new name as seed
        user[element.id] = element.value
        document.getElementById("avatar-display").src=`https://avatars.dicebear.com/api/identicon/${user['name']}.svg`
    } 
    else if (element.id === "theme-variant"){
        console.log(element.id, element.value)
        user[element.id] = backgrounds[element.value]
    }else{
        user[element.id] = element.value
    }
    renderPreview()
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

    console.log("variant", user["theme-variant"])
    html = nunjucks.renderString(glassTheme, user)
    // TODO Set avatar to new image
    document.getElementById("preview-pane").src = `data:text/html,${encodeURIComponent(html)}`
    console.log(encodeURIComponent(html))
    // document.getElementById("preview-pane").srcdoc = html
    return html
}

function download(){
    // Used to download files

    template_content= renderPreview() // Get template content

    // Start building zip file
    zip = new JSZip();

    // Add template to zip
    zip.file("index.html", template_content);

    // Begin adding avatar
    img = zip.folder("img");
    if (user["avatar"].name.startsWith("https://avatars.dicebear.com")){
        //TODO
    }else{
        
        newAvatar = document.getElementById("avatar").files[0]
        filepath = document.getElementById("avatar").files[0].name
        extension = filepath.split(".")[filepath.split(".").length -1]
        img.file("avatar." + extension, newAvatar, {base64: true});

    }

    // Export zip file
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        // see FileSaver.js
        saveAs(content, "site.zip");
    });

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
    }).catch((error) => { // If there's an error
        console.log('Saving failed: ', error)
    })
    
}
