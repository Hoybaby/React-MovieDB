import React from 'react'

import { Wrapper, Content, Text } from './HeroImage.styles';

// prop never be changed inside the component that recieves the prop.
// it was props on line 8 but can use deconstructing to sip having to top in props and just do it ({and call the information from props in here so }) you dont have to write
// props.image or props.title.
const HeroImage = ({image, title, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>

        </Content>
    </Wrapper>
)

export default HeroImage