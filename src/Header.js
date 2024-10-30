import React from 'react';
import { useGlobalContext } from './context';


const Header = () => {
    const {openSideBar,sideBarFunction,data,selectingPlanetFunction} = useGlobalContext()
    return(
        <div className="header-section">
            <h1 className="website-heading">THE PLANETS</h1>
            <div className="sidebar">
            {
                openSideBar ?
                <img className="hamburger-icon" width="24" height="17" src="/images/icon-hamburger.svg" alt="abc"  onClick={()=>{sideBarFunction()}}></img> :
                <img className="close-icon" src="/images/icon-hamburger.svg" alt="abc" height="50%" onClick={()=>{sideBarFunction()}}></img>
            }
            </div>
            <div className="planet-name-div-desktop">
                {
                    data.map((planet)=>{
                        return(
                            <p className="planet-name-desktop" onClick={()=>{selectingPlanetFunction(planet)}}>{planet.name}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Header
/*
.header-section
.website-heading
.sidebar
.hamburger-icon
.close-icon
.planet-name-div-desktop
.planet-name-desktop
*/