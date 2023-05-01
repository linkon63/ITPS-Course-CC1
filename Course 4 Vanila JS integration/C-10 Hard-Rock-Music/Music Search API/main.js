
// search function calling 
const searchSongs = () => {
    const searchValue = document.getElementById('search-filed').value
    console.log("searchValue : ", searchValue)
    // console.log("button search Song")
    const url = `https://api.lyrics.ovh/suggest/${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("Data : ", data)
            displaySongs(data.data)
        })
        .catch((err) => console.error("Error from API ❌"))

}

// display song function
const displaySongs = (songs) => {
    try {
        const songContainer = document.getElementById('song-container')
        // corner case
        songContainer.innerHTML = ""

        songs.forEach(song => {
            // console.log("Single Song : ", song)
            const singleSongDiv = document.createElement('div')
            // single class add
            // singleSongDiv.classList.add('')  // this is function
            // multiple class add
            // singleSongDiv.className = ' ' // this is text

            singleSongDiv.innerHTML =
                `
                <div class="col">
                    <h3>${song.title}</h3>
                    <audio controls>
                        <source src="${song.preview}" type="audio/ogg">
                        <source src="${song.preview}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                    <p>Artist : ${song.artist.name}</p>         
                </div>            
            `

            // < audio controls >
            //     <source src="${song.preview}" type="audio/oog">
            //     </audio>

            songContainer.appendChild(singleSongDiv)
            console.log("singleSongDiv : ", singleSongDiv)
        });
        console.log("songContainer : ", songContainer)
    } catch (error) {
        console.log("display error")
    }



}



