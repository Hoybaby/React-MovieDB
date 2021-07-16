import React, {useState, useEffect} from 'react'

// API
import API from '../API'

// configuration
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'

// Components
import HeroImage from './HeroImage/HeroImage';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb'

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';


// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const {state, loading, error} = useHomeFetch();

    

    console.log(state);
    return <div>
        {/* this component needs to get the title, and text so it needs to be passed a prop */}
        {/* this code means that is state.results is true, it will also run the component HeroImage */}
        {state.results[0] ?
        <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
        /> : null
        }
        <Grid header='Popular Movies'>
            {/* using map to go through the results array */}
            {state.results.map(movie => (
                // had to add a key to avoid and error and make everything specific.
                <Thumb
                    key={movie.id}
                    clickable
                    image={
                    movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
                />
            ))}

        </Grid>
    </div>
}


export default Home