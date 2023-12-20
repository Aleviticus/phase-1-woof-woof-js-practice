fetch("http://localhost:3000/pups")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        for(let pup of data) {
            renderPup(pup)
        }
})

let renderPup = (pupObject) => {

    let bar = document.getElementById('dog-bar')
    console.log(bar)

    let pupName = document.createElement('span')
    pupName.textContent = pupObject.name

    pupName.addEventListener('click', () => {
        pupDetail(pupObject)
    })
    
    bar.append(pupName)
}

let pupDetail = (pupObject) => {

    let info = document.getElementById('dog-info')
    info.innerHTML = ''

    let pupImage = document.createElement('img')
    pupImage.src = pupObject.image

    let pupName = document.createElement('h2')
    pupName.textContent = pupObject.name


    let pupBehavior = document.createElement('button')
   
    pupBehavior.textContent = pupObject.isGoodDog

    if(pupObject.isGoodDog === true) {
        pupBehavior.textContent = "Good Dog!"
    } else if(pupObject.isGoodDog === false) {
     pupBehavior.textContent = "Bad Dog!"
    }
    info.append(pupImage, pupName, pupBehavior)


    pupBehavior.addEventListener('click', () => {
        if(pupBehavior.textContent === "Good Dog!") {
            pupBehavior.textContent = "Bad Dog!"
        } else {
            pupBehavior.textContent = "Good Dog!"
        }
    })
}

