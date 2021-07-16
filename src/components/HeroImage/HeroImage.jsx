import React from 'react'

import { Wrapper, Content, text } from './HeroImage.styles';

// prop never be changed inside the component that recieves the prop.
const HeroImage = (props) => (
    <Wrapper image={props.image}>
        <Content>
            <Text>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </Text>

        </Content>
    </Wrapper>
)

export default HeroImage