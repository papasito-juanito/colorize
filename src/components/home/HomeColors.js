import React from 'react';
import styled from 'styled-components';

const ColorFamilyContainer = styled.div`
    position:absolute;
    margin-top:15%

`

const ColorFamily= styled.div`
    width: 300px;
    height: 400px;
    margin: 10px;
    background-color: yellow;
`

const HomeColors = (props) => {
        return (
            <ColorFamilyContainer>
                <ColorFamily />
            </ColorFamilyContainer>
        );
};

export default HomeColors;