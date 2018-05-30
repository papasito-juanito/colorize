import React from 'react';
import styled from 'styled-components';




const Items = ({image, color, desc}) => {
    return (
        <ItemListContainer>
            <Ul>
                <Li>
                    <Wrapper>
                        <ItemTop >
                            <Img />
                            <Color />
                        </ItemTop >
                        <ItemBottom></ItemBottom>
                    </Wrapper>
                </Li>
            </Ul>    
        </ItemListContainer>
    );
};

export default Items;