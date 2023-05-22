import React, { useEffect, useState } from 'react'

export default function LoadData() {
    // conditional rendering and useeffect hooks.
    const [loader, setLoader] = useState(false)
    const [apiData, setApiData] = useState([])

    // useeffect will run the function after reload the page
    useEffect(() => {
        setLoader(true)
        console.log("Use effect run when brower load")
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setApiData(json.slice(0, 500))
                setLoader(false)
            })
    }, [])

    // data fetch by onclick
    const handleButton = () => {
        setLoader(true)
        console.log("hello button click")
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setApiData(json.slice(0, 100))
                setLoader(false)
            })
    }

    return (
        <div className='text-center pt-5 '>
            <h1>Load Data from APIS</h1>
            <button onClick={handleButton} className='btn btn-primary mt-5'>Load Data</button>

            <br />
            {
                loader &&
                <div className="spinner-border mt-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }

            {
                apiData.length > 0 &&
                apiData.map(ad => (
                    <div className="card" style={{ height: '100px' }}>
                        {/* <img src={ad.thumbnailUrl} className="card-img-top" alt="image" /> */}
                        <div className="card-body">
                            <h5 className="card-title">{ad.title}</h5>
                            <p className="card-text">{ad.thumbnailUrl}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
