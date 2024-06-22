import '../NavBar/NavBar.css';
import { CheckContext } from '../CutomHook/CustomHookProvider';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const {loadingArabia, loadingFundbot, loadingCOB, loadingHelios, loadingReflect, setSelectedModule,
    startTimeArabia, startTimeFundbot, startTimeCOB, startTimeHelios, startTimeReflect, setDateTime} = useContext(CheckContext);
  const [activeModule, setActiveModule] = useState(localStorage.getItem('selectedModule'));

  const BackHome = useNavigate();

  const handleClick = (moduleName:string) => {
    setSelectedModule(moduleName);
    localStorage.setItem('selectedModule', moduleName);
    setActiveModule(moduleName);

    switch (moduleName) {
      case 'Arabia':
        setDateTime(startTimeArabia);
        break;
      case 'FundBot':
        setDateTime(startTimeFundbot);
        break;
      case 'COB':
        setDateTime(startTimeCOB);
        break;
      case 'Helios':
        setDateTime(startTimeHelios);
        break;
      case 'Reflect':
        setDateTime(startTimeReflect);
        break;
      default:
        setDateTime('');
    }
  };

  useEffect(() => {
    const savedModule = localStorage.getItem('selectedModule');
    if (savedModule) {
      setSelectedModule(savedModule);
      setActiveModule(savedModule);
    }
  }, [setSelectedModule]);

  return (
    <div className='NavbarParent'>
      <div>
        <div className='HomeIcon' onClick={() => BackHome('/')}><i className="bi bi-house"></i></div>
        {loadingArabia && (
          <span
            onClick={() => handleClick('Arabia')}
            className={activeModule === 'Arabia' ? 'active' : ''}
          >
            Arabia
          </span>
        )}
        {loadingFundbot && (
          <span
            onClick={() => handleClick('FundBot')}
            className={activeModule === 'FundBot' ? 'active' : ''}
          >
            FundBot
          </span>
        )}
        {loadingCOB && (
          <span
            onClick={() => handleClick('COB')}
            className={activeModule === 'COB' ? 'active' : ''}
          >
            COB
          </span>
        )}
        {loadingHelios && (
          <span
            onClick={() => handleClick('Helios')}
            className={activeModule === 'Helios' ? 'active' : ''}
          >
            Helios
          </span>
        )}
        {loadingReflect && (
          <span
            onClick={() => handleClick('Reflect')}
            className={activeModule === 'Reflect' ? 'active' : ''}
          >
            Reflect
          </span>
        )}
      </div>
    </div>
  );
}

export default NavBar;
