
import './App.css';
import { useGlobalContext } from './context';
import Header from './Header';
import SideBar from './SideBar';
import PlanetDetails from './PlanetDetails';

function App() {
  const {data,openSideBar} = useGlobalContext()
  return (
    <div className="App">
      <Header/>
      <div className="sidebar-section">
      {
        openSideBar ? 
        <PlanetDetails/> :
        <SideBar/> 
      }
      </div>
      <div className="planet-detail-section">
        <PlanetDetails/>
      </div>
    </div>
  );
}

export default App;
