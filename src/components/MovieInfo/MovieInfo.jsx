import React from 'react';

import { Wrapper, Content, Text } from './MovieInfo.styles';

import Thumb from '../Thumb/Thumb';

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

// fallback image
import NoImage from '../../images/no_image.jpg';

const MovieInfo = ({movie}) => (
    // passing in a prop
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Text>

            </Text>
        </Content>
    </Wrapper>
)



export default MovieInfo;