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

            // we want to put our movies into the state
            // if you provide a state setter with a function, it will be called with the previous state
            // never mutate the state in react because if you do, it wont trigger a rerender, always use setter 
            setState(prev => ({
                ...movies,
                results: 
                // we want to attach the new movies to the previous array. 
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        } catch(error) {
            setError(true);
        }
        // we are useing the setter here because we would have already gotten the movie from the information so there would not be anymore loading
        setLoading(false)
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