import React from 'react';

import {Link} from 'react-router-dom';

import { Image } from './Thumb.styles';

// the image, moviId, cliaable are all props from movie
const Thumb = ({image, movieId, clickable}) => (
    <div>
        {/* first I am checking if clicckable is true, which if it is a Link componenet of the picture will occur if not, no Link is possible */}
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie thumb'/>
            </Link>
        ) : (
            <Image src={image} alt='movie thumb'/>
        )}   
    </div>
)


export default Thumb;