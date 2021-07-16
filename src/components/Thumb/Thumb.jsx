import React from 'react';

import { Image } from './Thumb.styles';

// the image, moviId, cliaable are all props from movie
const Thumb = ({image, movieId, clickable}) => (
    <div>
        <Image src={image} alt='movie thumb'/>
        
    </div>
)


export default Thumb;