import React from 'react'
// this hook we can grab the param from the url
import { useParams } from 'react-router-dom';

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// componenets
import Grid from './Grid/Grid';
import Spinner from './Spinner/Spinner';
import BreadCrumb from './BreadCrumb/Breadcrumb';
import MovieInfo from './MovieInfo/MovieInfo';

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';

// Image
import NoImage from '../images/no_image.jpg'

const Movie = () => {

    const {movieId} = useParams()

    const {state: movie, loading, error} = useMovieFetch(movieId)

    if(loading) return <Spinner/>;
    if(error) return <div>something went wrong...</div>;

    return(
        <div>

            <BreadCrumb movieTitle={movie.original_title}/>
            {/* the prop is the movie state */}
            <MovieInfo movie={movie}/>
            
        </div>
    )
}
    


export default Movie;