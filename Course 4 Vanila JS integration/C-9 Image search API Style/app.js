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
            const responseData = json.hits
            // const tenPhotos = json.slice(0, 10)
            console.log("responseData", responseData)

            // map 10 photos and show 10 photos

            for (let i = 0; i < responseData.length; i++) {
                const tp = responseData[i];

                const div1 = document.createElement('div')
                const div2 = document.createElement('div')

                // console.log("Create Div : ", div1, div2)

                div1.classList.add('card') // col-4 p-1
                div1.classList.add('col-4') // col-4 p-1
                div1.classList.add('p-1') // col-4 p-1
                div2.classList.add('card-body')

                // console.log("Class Add Div : ", div1, div2)

                const p = document.createElement('p')
                const image = document.createElement('img')
                image.classList.add('card-img-top')
                p.innerText = tp.tags
                p.classList.add('card-title')

                image.src = tp.largeImageURL

                div1.appendChild(image)
                div2.appendChild(p)
                div1.appendChild(div2)

                imageParent.appendChild(div1)
            }

            // responseData.map((tp) => {

            //     const div1 = document.createElement('div')
            //     const div2 = document.createElement('div')

            //     console.log("Create Div : ", div1, div2)

            //     div1.classList.add('card') // col-4 p-1
            //     div1.classList.add('col-4') // col-4 p-1
            //     div1.classList.add('p-1') // col-4 p-1
            //     div2.classList.add('card-body')

            //     console.log("Class Add Div : ", div1, div2)

            //     const p = document.createElement('p')
            //     const image = document.createElement('img')
            //     image.classList.add('card-img-top')
            //     p.innerText = tp.tags
            //     p.classList.add('card-title')

            //     image.src = tp.largeImageURL

            //     div1.appendChild(image)
            //     div2.appendChild(p)
            //     div1.appendChild(div2)

            //     imageParent.appendChild(div1)
            //     // imageParent.appendChild(image)
            //     // imageParent.appendChild(p)
            // })


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

