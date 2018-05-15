import React from 'react';
import styled from 'styled-components';


const Title = styled.div`
  font-size: 1.5rem;
  color: palevioletred;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
`

var Side = () => (

        <div style = {{ border: 'solid gold', width:'60%'}}>
            <div style={{ height: '20%', backgroundColor: 'yellow' }}>
                <Title> Colorize </Title>
            </div>
            <div style={{ height: '40%', backgroundColor: ' green' }}>
                <Img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlyhWP3ctYpNC6ISNxtkyf62IBKvc8bI2694Obx0XjMiMK1EvWaA'} alt={'lip'} />
            </div>
            <div style={{ height: '40%', backgroundColor: ' blue' }}>
                <Img src={'https://2.bp.blogspot.com/-ATfX1rIvjjA/WJ40PX1Ka8I/AAAAAAAAY7o/-wTuvm6CchIBN-4qf7bjpGelLSo0AmTVgCEw/s1600/pixi-itsjudytime-get-the-look-its-lip-time-palette-swatches-review-2.jpg'} alt={'lips'} />
            </div>                        
        </div >

    )

export default Side;