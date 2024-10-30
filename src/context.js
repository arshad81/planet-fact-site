import react from 'react'
import React ,{useContext,useState,useEffect} from 'react'
import data from './data.json'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const[openSideBar,setOpenSideBar] = useState(false)
    const [planet,setPlanet] = useState("Mercury")
    const [planetOverview,setOverView] = useState(false)
    const [structure,setStructure] = useState(false)
    const [surface,setSurface] = useState(false)

    const sideBarFunction = () => {
        console.log(openSideBar)
        setOpenSideBar(!openSideBar)
    }

    useEffect(() => {
        setPlanet(data[0])
        console.log(planet)
        setOpenSideBar(!openSideBar)
        setOverView(true)
    },[])

    const selectingPlanetFunction = (planetName) => {
        setPlanet(planetName)
        console.log(planet)
        setOpenSideBar(!openSideBar)
        setOverView(true)
    }

    const overviewFunction = () => {
        setOverView(true)
        setStructure(false)
        setSurface(false)
    }

    const structureFunction = () => {
        setOverView(false)
        setStructure(true)
        setSurface(false)
    }

    const surfaceFunction = () => {
        setOverView(false)
        setStructure(false)
        setSurface(true)
    }

    return(
        <AppContext.Provider
        value={{
            data,openSideBar,sideBarFunction,selectingPlanetFunction,planet,setPlanet,planetOverview,structure,surface,overviewFunction,structureFunction,surfaceFunction
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppContext,AppProvider};