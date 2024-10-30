import React from 'react';
import { useGlobalContext } from './context';

/*
planet-info-div
planet-image
planet-img
planet-info
planet-name
planet-description
source
planet-header-desktop
*/
const PlanetDetails = () => {
    const{planet,planetOverview,overviewFunction,surfaceFunction,structureFunction,structure,surface,setPlanet} = useGlobalContext()
    return(
        <div className="planet-info-section">
            {
                planetOverview ? 
                <div className="planet-info-div">
                    <div className="border">
                    <div className="planet-header-mobile">
                        <p className="attribute-text attribute-text-mobile" style={{borderColor:planet.color}} onClick={()=>{overviewFunction()}}>OVERVIEW</p>
                        <p className="attribute-text" onClick={()=>{structureFunction()}}>Structure</p>
                        <p className="attribute-text" onClick={()=>{surfaceFunction()}}>Surface</p>
                    </div>
                    </div>
                    <div className="planet-image">
                        <img className="planet-img" alt='planet' width="458" height="458" style={{width:'50%' , height:'50%'}} src={planet.images.planet}></img>
                    </div>
                    <div className="planet-info">
                        <p className="planet-name">{planet.name}</p>
                        <p className="planet-description">{planet.overview.content}</p>
                        <a className="source" href={planet.overview.source}>Source: Wikipedia 
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/></svg>
                             </a>
                        <div className="planet-header-desktop">
                            <p className="attribute-text active-attribute" style={{backgroundColor:planet.color}} onClick={()=>{overviewFunction()}}>01 OVERVIEW</p>
                            <p className="attribute-text" onClick={()=>{structureFunction()}}>Structure</p>
                            <p className="attribute-text" onClick={()=>{surfaceFunction()}}>Surface</p>
                        </div>
                    </div>
                </div> :

                structure ? 
                <div>
                    <div className="planet-info-div">
                    <div className="border">
                    <div className="planet-header-mobile">
                        <p className="attribute-text" onClick={()=>{overviewFunction()}}>OVERVIEW</p>
                        <p className="attribute-text attribute-text-mobile"style={{borderColor:planet.color}} onClick={()=>{structureFunction()}}>Structure</p>
                        <p className="attribute-text" onClick={()=>{surfaceFunction()}}>Surface</p>
                    </div>
                    </div>
                        <div className="planet-image">
                            <img className="planet-img" width="458" height="458" alt='planet' style={{width:'50%' , height:'50%'}} src={planet.images.internal}></img>
                        </div>
                        <div className="planet-info">
                            <p className="planet-name">{planet.name}</p>
                            <p className="planet-description">{planet.structure.content}</p>
                            <a className="source" href={planet.overview.source}>Source: Wikipedia <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/></svg> </a>
                            <div className="planet-header-desktop">
                                <p className="attribute-text" onClick={()=>{overviewFunction()}}>01 OVERVIEW</p>
                                <p className="attribute-text active-attribute" style={{backgroundColor:planet.color}} onClick={()=>{structureFunction()}}>Structure</p>
                                <p className="attribute-text" onClick={()=>{surfaceFunction()}}>Surface</p>
                            </div>
                        </div>
                    </div>
                </div> :

                surface ? 
                <div>                    
                    <div className="planet-info-div">
                    <div className="border">
                    <div className="planet-header-mobile">
                        <p className="attribute-text" onClick={()=>{overviewFunction()}}>OVERVIEW</p>
                        <p className="attribute-text" onClick={()=>{structureFunction()}}>Structure</p>
                        <p className="attribute-text attribute-text-mobile" style={{borderColor:planet.color}} onClick={()=>{surfaceFunction()}}>Surface</p>
                    </div>
                    </div>
                        <div className="planet-image">
                            <img className="planet-img" width="458" height="458" alt='planet' style={{width:'50%' , height:'50%'}} src={planet.images.geology}></img>
                        </div>
                        <div className="planet-info">
                            <p className="planet-name">{planet.name}</p>
                            <p className="planet-description">{planet.geology.content}</p>
                            <a className="source" href={planet.overview.source}>Source: Wikipedia 
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/></svg>
                                 </a>
                            <div className="planet-header-desktop">
                                <p className="attribute-text" onClick={()=>{overviewFunction()}}>01 <span className="att-text">OVERVIEW</span></p>
                                <p className="attribute-text" onClick={()=>{structureFunction()}}>Structure</p>
                                <p className="attribute-text active-attribute" style={{backgroundColor:planet.color}} onClick={()=>{surfaceFunction()}}>Surface</p>
                            </div>
                        </div>
                    </div>
                </div> :
                <p></p>
            }
            
            <div className="planet-details">
                <div className="planet-detail-div">
                    <p className="info-topic">ROTATION TIME</p>
                    <p className="info">{planet.rotation}</p>
                </div>
                <div className="planet-detail-div">
                    <p className="info-topic">REVOLUTION TIME</p>
                    <p className="info">{planet.revolution}</p>
                </div>
                <div className="planet-detail-div">
                    <p className="info-topic">RADIUS</p>
                    <p className="info">{planet.radius}</p>
                </div>
                <div className="planet-detail-div">
                    <p className="info-topic">AVERAGE TEMP</p>
                    <p className="info">{planet.temperature}</p>
                </div>
            </div>
        </div>
    )
}
export default PlanetDetails