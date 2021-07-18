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

    // since this is being used with a useRef, it wont be rerender and is mutuable
    const initial = useRef(true);
    

    useEffect(() => {

        if(initial.current) {
            initial.current = false;
            return;
        }
        // creating a timer to make a little delay from when user inputs a field to the data getting the results
        const timer = setTimeout(()=> {
            setSearchTerm(state);
        }, 500)
        // I need to return this function because if you dont, there will be a lot of timers because of the rerenders
        return() => clearTimeout(timer)
    }, [setSearchTerm, state])

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