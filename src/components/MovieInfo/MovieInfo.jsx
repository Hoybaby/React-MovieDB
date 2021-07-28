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
            <Thumb 
            image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
            // we dont want it to be clickable so we make it false.
            clickable={false}

            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>Synopsis</h3>
                <p>{movie.overview}</p>

                <div className='rating-directos'>
                    <div>
                        <h3>Rating</h3>
                        <div className="score">
                            {movie.vote_average}
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(director=> (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
)



export default MovieInfo;