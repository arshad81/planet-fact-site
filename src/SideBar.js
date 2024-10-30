import React from 'react';
import { useGlobalContext } from './context';

const SideBar = () => {
    const{data,selectingPlanetFunction} = useGlobalContext()
    return(
        <div className="sidebar-section">
            {
                data.map((planetName)=>{
                    return(
                        <div className="planet-names">
                            <div className="planet-div">
                                <div className="circle" style={{backgroundColor: planetName.color}}>
                                    <p></p>
                                </div>
                                <p onClick={()=>{selectingPlanetFunction(planetName)}}>{planetName.name}</p>
                            </div>
                            <img src="/images/icon-chevron.svg" height="100%"></img>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default SideBar
/*
.sidebar-section

.planet-names
*/