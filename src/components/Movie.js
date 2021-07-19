import React from 'react'
// this hook we can grab the param from the url
import { useParams } from 'react-router-dom';

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// componenets
import Grid from './Grid/Grid';
import { Spinner } from './Spinner/Spinner';

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';

// Image
import NoImage from '../images/no_image.jpg'

const Movie = () => {

    const {movieId} = useParams()

    const {state: movie, loading, error} = useMovieFetch(movieId)

    console.log(movie)

    return(
        <div>
            <div>Movie Page</div>
        </div>
    )
}
    


export default Movie;