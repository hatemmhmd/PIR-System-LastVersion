import { useNavigate } from 'react-router-dom';
import '../Header/Header.css';
import { useContext, useEffect, useState } from 'react';
import { CheckContext } from '../CutomHook/CustomHookProvider';

function Header() {
    const GoData = useNavigate();
    const {loadingArabia, loadingFundbot, loadingCOB, loadingHelios, loadingReflect , setDarkMode} = useContext(CheckContext);
    const [style , setStyle] = useState(false);

    useEffect(()=>{
        loadingArabia || loadingFundbot || loadingCOB || loadingHelios || loadingReflect?
        setStyle(true) : setStyle(false);
    } , [loadingArabia,loadingCOB,loadingFundbot,loadingHelios,loadingReflect])

return (
    <div className='header' onClick={()=>setDarkMode(prev => !prev)}>
        {/* <div className='darkmode'>
            <i className="bi bi-moon-stars"></i>
        </div> */}
        <div>
        <div className='systemName'>
            <h1> pir live</h1>
        </div>
        
        <div className='logo'>
            <h4>2024 - arab bank</h4>
        </div>
        </div>

        <div className={`ShowBtn ${style?'' : 'activeBtn'}`}  onClick={()=>{GoData('/DataPage')}}>
            <h4>show details</h4>
        </div>
    </div>
)
}

export default Header
