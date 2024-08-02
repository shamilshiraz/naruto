fetchData()
async function fetchData(){


    try{
        let charName=document.getElementById('charName').value.toLowerCase();
        const response= await fetch(`https://narutodb.xyz/api/character/search?name=${charName}`)
        const data=await response.json()
        const charData=document.getElementById('chardata')
        const release=document.getElementById('release')
        const jutsu=document.getElementById('jutsu')
        const tools=document.getElementById('tools')
        const rank=document.getElementById('rank')

        console.log(data);  
        charData.innerHTML="name:"+data.name
        release.innerHTML="chakra nature:"+data.natureType
        jutsu.innerHTML="jutsus:"+data.jutsu[0]+','+data.jutsu[1]+','+data.jutsu[2]
        tools.innerHTML="Tools:"+data.tools[0]+','+data.tools[1]+','+data.tools[3]
        const pic=data.images[0]
        charImg.style.display="block"


        charImg.src=pic


        



    }
    catch(error){
        console.error(error)
        
    }
}
