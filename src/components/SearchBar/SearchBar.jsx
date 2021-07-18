import React, {useState, useEffect, useRef} from 'react';

// styles
import { Wrapper, Content } from './SearchBar.styles'

// image

import searchIcon from '../../images/search-icon.svg'

// the useState will create a controlled component which have the input field.
// useEffect will trigger when local state changes and update search term
// useRef will help specify the useEffect and make somethings we dont want to happen

// destructing a prop again
const SearchBar = ({setSearchTerm}) => {

    const [state, setState] = useState('')

    useEffect(() => {

        // creating a timer to make a little delay from when user inputs a field to the data getting the results
        const timer = setTimeout(()=> {
            setSearchTerm(state);
        }, 500)
    }, [])

    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'></img>
                <input type="text" 
                placeholder='Search Movie'
                // this will give us the value in the input field
                onChange={event => setState(event.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>

    )
}

export default SearchBar;