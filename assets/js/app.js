
function initializeEditor(){
    usersName = document.getElementById("name").value
    github = document.getElementById("github").value
    instagram = document.getElementById("instagram").value
    theme = document.getElementById("theme").value

    // Fill Empty values
    if (!usersName){
        usersName = "John Doe";
        document.getElementById("name").value = "John Doe"
    }

    if (!github){
        github = "https://github.com/user";
        document.getElementById("github").value = "https://github.com/user"
    }

    if (!instagram){
        instagram = "https://instagram.com/user";
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