import React from 'react';
import CarbonNanoTubePageComponent from '../../Component/CarbonNanoTubePageComponent';
import Hero from '../../Component/HeroComponent';
import techbackground from '../../img/tech-background.png';

export default function CarbonNanoTubePage() {
    return (
        <>
            <Hero
                title={
                    <>
                        <h1>Daon</h1> Carbon Nanotube Technology
                    </>
                }
                backgroundImage={techbackground}
                showLogoBox={false}
                height="65vh"
            />
            <CarbonNanoTubePageComponent />
        </>
    );
}
