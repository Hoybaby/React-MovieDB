import { useState, useEffect } from "react";

import API from '../API'


export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=> {
        const fetchMovie = async() => {
            try {
                setLoading(true);
                setError(false);

                const movies = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                // getting directors
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );
                    // since we have all the data, i will set the state below so it has it
                setState({
                    // spread out the movies
                    ...movies,
                    actors: credits.cast,
                    directors
                })

                setLoading(false);

            } catch(error) {
                setError(true);
            }
        }

        fetchMovie();

        // everytime movieId changes, it will rerender only
    }, [movieId])

    return {state, loading,error}
}
