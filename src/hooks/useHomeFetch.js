// this will be a custom hook. files should always name the custom hook with useXXXX.
// since we dont have JSX, we dont need to import React

import API from '../API'

import {useState, useEffect, useRef} from 'react'

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    
    const [state, setState] = useState(initialState);

    const [loading, setLoading] = useState(false);

    // will handle error from api if one occurs
    const [error, setError] = useState(false);

    const [searchTerm, setSearchTerm] = useState('')

    const [isLoadingMore, setIsLoadingMore] = useState(false);

    console.log(searchTerm)

    // we have  an async function because we are going to fetch from the API and wait for the reponse
    const fetchMovies = async(page, searchTerm = '') => {
        try {
            setError(false);
            // since error is false, that means we the data be loading which is why we using setLoading
            setLoading(true);

            // this is being retrieved from the API.js
            const movies = await API.fetchMovies(searchTerm, page);
            // console.log(movies)

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

    // initial render will take effect here. 7/18 now i am going to apply the search to this useEffect
    useEffect(() => {
        // fetch first page of movies.  7/18 to wipe out state everytime we search, we do setState
        setState(initialState)
        fetchMovies(1, searchTerm)
        // empty dependency arry will only launch the first render. Now with searchTerm, the useEffect will trigger when searchTerm changes
    }, [searchTerm])


    // Load More useEffect. This will be mainly for the button. I am using state.page + 1 because we want the next page
    useEffect(() => {
        if(!isLoadingMore) return;
        fetchMovies(state.page + 1, searchTerm)
        setIsLoadingMore(false)


    }, [isLoadingMore, state.page, searchTerm])

    // this is es6 syntax. this will automically gain the property of state
    return {state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore}
}