import { useState, useEffect } from "react";

import API from '../API'


export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=> {
        const fetchData = async() => {
            try {
                setLoading(true);
                setError(false);

                const movies = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                
            } catch(error) {
                setError(true);
            }
        }

        // everytime movieId changes, it will rerender only
    }, [movieId])
}