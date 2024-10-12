// fetch data from apis


// application interface

// frontend <-> apis <-> ( backend -> database )
// window.addEventListener('', function(){
//     console.log('clicked');
// })

const photoContent = document.getElementById('photoContent');

window.addEventListener('DOMContentLoaded', function(e) {
    console.log("dom loaded")
    logPhotos()
})


async function logPhotos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photosRes = await response.json();
    const slicePhotos = photosRes.slice(0, 10)
    console.log('photos',slicePhotos);
    console.log('dom', photoContent);

    for (let i = 0; i < slicePhotos.length; i++) {
        const element = slicePhotos[i];
        console.log("el", element);

        const div = document.createElement('div');
        div.className = "card"

        const image = document.createElement('img');
        image.src = element.url
        image.className = "card-img-top w-25"

        div.appendChild(image)

        const div2 = document.createElement('div');
        div2.className = "card-body"
        
        const h5 = document.createElement('h5');
        h5.className = "card-title"
        h5.innerText = element.title
        div2.appendChild(h5)

        console.log(div2)

        const p = document.createElement("p")
        p.className = "card-text"
        p.innerText = "Some quick example text to build on the card title and make up the bulk of the card's content."

        div2.appendChild(p)

        const button = document.createElement('button')
        button.className = "btn btn-primary"
        button.innerText = "Go somewhere"

        div2.appendChild(button)

        
        div.appendChild(div2)

        photoContent.appendChild(div)

    }

  }
{/* <div class="card" >
  <img src="..." class="card-img-top" alt="...">
  
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>


</div> */}
