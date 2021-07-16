import React from 'react';

import { Wrapper, Content } from './Grid.styles';

// deconstructing our props automatically so I dont have to write props later
const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        {/* whatever i want to wrap in this componenet, i can display it in the {children} */}
        <Content>{children}</Content>
    </Wrapper>
)

export default Grid;