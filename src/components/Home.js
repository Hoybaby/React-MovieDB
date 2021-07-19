import React, {useState, useEffect} from 'react'

// API
import API from '../API'

// configuration
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'

// Components
import HeroImage from './HeroImage/HeroImage';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb'
import Spinner from './Spinner/Spinner';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button'

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';


// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const {state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore} = useHomeFetch();

    console.log(state);
    if(error) return <div>Something went wrong</div>

    return <div>
        {/* this component needs to get the title, and text so it needs to be passed a prop */}
        {/* this code means that is state.results is true, it will also run the component HeroImage */}
        {!searchTerm && state.results[0] ?
        <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
        /> : null
        }
        {/* this is so we can pass it down to our component, so that we can use it in the search bar. It will change the state in the hook when we fetch things*/}
        <SearchBar setSearchTerm={setSearchTerm}/>
        {/* created this ternary operator to say, Hey! if there is a search term, show search Result instead of Popular Movies which it should. */}
        <Grid header={searchTerm? 'Search Result' :'Popular Movies'}>
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
        {loading && <Spinner/>}
        {/* this basically says that is the state page is less than the amount of pages we have loaded, then show button. if not spinner will show */}
        {state.page < state.total_pages && !loading && (
            <Button text='Load More' callback={()=> setIsLoadingMore(true)}/>
        )}
    </div>
}


export default Home