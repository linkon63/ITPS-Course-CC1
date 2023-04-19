console.log("App js run 🧡 ")
let photos = []

const form = document.getElementById('form-submit')
const input = document.getElementById("input-Box")
const imageParent = document.getElementById('image-parent')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("Form Submit input.value", input.value)

    // data fetch from backend
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((json) => {
            // console.log(json)
            const tenPhotos = json.slice(0, 10)
            console.log(tenPhotos)

            // map 10 photos and show 10 photos

            tenPhotos.map((tp) => {

                const p = document.createElement('p')
                const image = document.createElement('img')
                p.innerText = tp.title
                image.src = tp.url

                imageParent.appendChild(image)
                imageParent.appendChild(p)
            })


        })

})



// get data function

function getPhotos() {
    // fetch('https://jsonplaceholder.typicode.com/photos')
    //     .then(response => response.json())
    //     .then((json) => {
    //         console.log(json)
    //         photos = json
    //     })
}

