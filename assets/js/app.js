
user = {}

function initializeEditor(){
    // Initializes the editor
    user["name"] = document.getElementById("name").value
    user["github"] = document.getElementById("github").value
    user["instagram"] = document.getElementById("instagram").value
    user["theme"] = document.getElementById("theme").value
    user["avatar"] = `https://avatars.dicebear.com/api/identicon/${user["name"]}.svg`

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
    user[element.id] = element.value
    // Reset avatar to use new name as seed
    if (document.getElementById("avatar-display").src.includes("dicebear")){
        document.getElementById("avatar-display").src=`https://avatars.dicebear.com/api/identicon/${user['name']}.svg`
    }
    if (element.id === "avatar"){
        console.log("yeet")
        reader = new FileReader();
        reader.onload = function(e){
            document.getElementById("avatar-display").src = e.target.result
        }
        reader.readAsDataURL(document.getElementById("avatar").files[0])
    } 

}