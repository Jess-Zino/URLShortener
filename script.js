let userIn = document.getElementById("userUrl").value
let outUrl = document.getElementById("outUrl")
let genBtn = document.getElementById("gen")
let copyBtn = document.getElementById("copy")

    genBtn.addEventListener("click", async()=>{
        let userIn = document.getElementById("userUrl").value
        const result  = await fetch(`https://api.shrtco.de/v2/shorten?url=${userIn}`)
        
        const data = await result.json()    
       
        outUrl.value = data.result.short_link2
        genBtn.style.backgroundColor ="#28a745"
       
    })
  
    copyBtn.addEventListener("click", ()=>{
        if(outUrl.value === ""){
            alert("Please Fill in a valid URL")
           }
           else{
        outUrl.select()
        
        window.navigator.clipboard.writeText(outUrl.value)
        
        copyBtn.style.backgroundColor = "#28a745"
        setTimeout(()=>{copyBtn.style.backgroundColor = "#464646"}, 3000)}
    })
   