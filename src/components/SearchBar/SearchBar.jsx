import React, {useState, useEffect, useRef} from 'react';

import { Wrapper, Content } from './SearchBar.styles'

// the useState will create a controlled component which have the input field.
// useEffect will trigger when local state changes and update search term
// useRef will help specify the useEffect and make somethings we dont want to happen
