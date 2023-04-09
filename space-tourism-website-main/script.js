let getElement = (element)=>{
    return document.querySelector(element)
}

// oopen and close hambugger
getElement('.ham-open').addEventListener('click', ()=>{
    console.log('hello')
    getElement('.dropdown__item').classList.toggle('visible')
    getElement('.ham-open').classList.remove('visible')
    getElement('.ham-close').classList.add('visible')

})
getElement('.ham-close').addEventListener('click', ()=>{
    getElement('.dropdown__item').classList.toggle('visible')
    getElement('.ham-close').classList.remove('visible')
    getElement('.ham-open').classList.add('visible')

})

// end of open and close hambugger





// fetch url
var myInit = {
    method: 'GET',
    headers:{
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};
//url link
let jsonreq = new Request("/data.json", myInit)

/**multi page loader...=============function============.. */

//loader for destination page

function destinationFunc(){

    let img = getElement('.left__desc-container img');
    let destName = getElement('.name');
    let avDist = getElement('.av__dist');
    let writeup = getElement('.writeup');
    let days = getElement('.days');



    fetch(jsonreq)
    .then(explore=>{
        return explore.json()
    })
    .then(data=>{
        console.log(data)
        // listing all the destinations
        let list = getElement('.list');
        let destinations = data.destinations;

        destinations.forEach(dest => {

            let destlist = document.createElement("li")
            destlist.innerHTML = dest.name.toUpperCase();
            // console.log("hello", dest.name)
            list.appendChild(destlist)
            
        });
        // active destination
        destName.innerHTML = destinations[0].name.toUpperCase();
        avDist.innerHTML = destinations[0].distance;
        writeup.innerHTML = destinations[0].description;
        days.innerHTML = destinations[0].travel;
        img.src = destinations[0].images.webp;
        // document.querySelector('.list li').style.firstChild.classList.add('list__active')



        



        // showing contents for destination onclick
        let allDest = document.querySelectorAll('.list li');
        // console.log(allDest)

        for (let i = 0; i < allDest.length; i++) {
            allDest[i].addEventListener('click',()=>{
                // console.log(allDest[i].innerHTML)
                // console.log(destinations[i].description)

                destName.innerHTML = destinations[i].name.toUpperCase();
                avDist.innerHTML = destinations[i].distance;
                writeup.innerHTML = destinations[i].description;
                days.innerHTML = destinations[i].travel;
                img.src = destinations[i].images.webp;
            })
            
        }


      
        

    })

}

//loader for crew page

function crewFunc(){

    let crewimg = getElement('.right__crew-container img');
    let crewName = getElement('.name__crew');
    let crewRank = getElement('.position')
    let bio = getElement('.speech');
    let pagN = getElement('.pagination');
    console.log(pagN.querySelectorAll('.span'))

    fetch(jsonreq)
    .then(explore=>{
        return explore.json()
    })
    .then(data=>{
        console.log(data.crew)
         // listing all the crew
        let crew = data.crew;

        crew.forEach(dest => {

            let pagList = document.createElement("span")
            pagN.appendChild(pagList)
            
        });
        // active crew
        crewName.innerHTML = crew[0].name.toUpperCase();
        crewimg.src = crew[0].images.webp;
        crewRank.innerHTML = crew[0].role.toUpperCase();
        bio.innerHTML = crew[0].bio;
        pagN.querySelectorAll('span')[0].classList.add('btnround__active');

 
 
 
         
 
 
 
        // showing contents for crew onclick
        let allPagN = document.querySelectorAll('.pagination span');
        //  console.log(allPagN)
 
         for (let i = 0; i < allPagN.length; i++) {
             allPagN[i].addEventListener('click',()=>{
 
                 crewName.innerHTML = crew[i].name.toUpperCase();
                 crewRank.innerHTML = crew[i].role.toUpperCase();
                 bio.innerHTML = crew[i].bio;
                 crewimg.src = crew[i].images.webp;

                 allPagN.forEach(btn=>{
                    btn.classList.remove('btnround__active');

                })
                allPagN[i].classList.add('btnround__active');


             })
             
         }
 
 
 
 
    })
 
 


}
function techFunc(){

    let techName = getElement('.techname');
    let techDes = getElement('.techdes');
    let btnRound = getElement('.btn__round');
    let potImg = getElement('.tech-desktop');
    let ladImg = getElement('.tech-tabmob');

    fetch(jsonreq)
    .then(explore=>{
        return explore.json()
    })
    .then(data=>{
        console.log(data.crew)
         // listing all the crew
         let tech = data.technology;
 
        tech.forEach((dest, ind) => {

            let btnList = document.createElement("span")
            btnList.innerHTML = ind+1;
            btnRound.appendChild(btnList)
             
        });
         // active tech
         techName.innerHTML = tech[0].name.toUpperCase();
         potImg.src = tech[0].images.portrait;
         ladImg.src = tech[0].images.landscape;
         techDes.innerHTML = tech[0].description;
         btnRound.querySelectorAll('span')[0].classList.add('btnround__active');

 
 
 
         
 
 
 
         // showing contents for crew onclick
         let allBtnRound = document.querySelectorAll('.btn__round span');
        //  console.log(allPagN)
 
        for (let i = 0; i < allBtnRound.length; i++) {
            allBtnRound[i].addEventListener('click',()=>{
 
                techName.innerHTML = tech[i].name.toUpperCase();
                techDes.innerHTML = tech[i].description;
                potImg.src = tech[i].images.portrait;
                ladImg.src = tech[i].images.landscape;
                btnRound.querySelectorAll('span').forEach(btn=>{
                    btn.classList.remove('btnround__active');

                })
                btnRound.querySelectorAll('span')[i].classList.add('btnround__active');


                
            })
             
        }
 
 
 
 
    })
 
 


}
