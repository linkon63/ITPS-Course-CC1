console.log("App js run 🧡 ")


let photos = []

const form = document.getElementById('form-submit')
const input = document.getElementById("input-Box")
const imageParent = document.getElementById('image-parent')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("Form Submit input.value", input.value)
    removeAllChildNodes(imageParent)
    // data fetch from backend


    fetch(`https://pixabay.com/api/?key=22001713-36c15d23a30ca4b2a2ff11d59&q=${input.value}`)
        .then(response => response.json())
        .then((json) => {
            console.log(json.hits)
            const tenPhotos = json.hits
            // const tenPhotos = json.slice(0, 10)
            // console.log(tenPhotos)

            // map 10 photos and show 10 photos

            tenPhotos.map((tp) => {

                const p = document.createElement('p')
                const image = document.createElement('img')
                p.innerText = tp.tags
                image.src = tp.largeImageURL

                imageParent.appendChild(image)
                imageParent.appendChild(p)
            })


        })

})


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// get data function

function getPhotos() {
    // fetch('https://jsonplaceholder.typicode.com/photos')
    //     .then(response => response.json())
    //     .then((json) => {
    //         console.log(json)
    //         photos = json
    //     })
}

