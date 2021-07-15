import React, {useState, useEffect} from 'react'

// API

import API from '../API'

// configuration

import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'

// Hook


// Image

import NoImage from '../images/no_image.jpg';

const Home = () => {


    const [state, setState] = useState();

    const [loading, setLoading] = useState(false);

    // will handle error from api if one occurs
    const [error, setError] = useState(false);

    // we have  an async function because we are going to fetch from the API and wait for the reponse
    const fetchMovies = async(page, searchTerm = '') => {
        try {
            setError(false);
            // since error is false, that means we the data be loading which is why we using setLoading
            setLoading(true);

            // this is being retrieved from the API.js
            const movies = await API.fetchMovies(searchTerm, page);
            console.log(movies)
        } catch(error) {
            setError(true);
        }
    };

    // initial render will tak effect here
    useEffect(() => {
        // fetch first page of movies
        fetchMovies(1)
        // empty dependency arry will only launch the first render
    }, [])

    return <div>
        Home Page
    </div>
}


export default Home