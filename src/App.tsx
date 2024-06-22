import Overview from './components/Overview/Overview';
import Modules from './components/Modulee/Modules';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import System from './components/Systems/System';
import { CustomHookProvider } from './components/CutomHook/CustomHookProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SystemName from './components/SystemName-Date/SystemName';

const App = () => {

  return (
<CustomHookProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<> <Header/> <System/> </>}/>
      <Route path='DataPage' 
      
      element={
      
      <div className='dataPage'>
        
        <NavBar/>
        
        <SystemName/>

        <div className='dashboard'>
          <Overview />
          <Modules />
          </div>
      </div>}/>





    </Routes>
  </BrowserRouter>
</CustomHookProvider>
  );
}

export default App;
