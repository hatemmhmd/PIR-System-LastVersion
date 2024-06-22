import { useContext } from 'react';
import '../Systems/System.css';
import { CheckContext } from '../CutomHook/CustomHookProvider';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function System() {
    const {
        checkArabia, setCheckedArabia, checkFundbot, setCheckFundbot, checkCOB, setCheckCOB,
        checkHelios, setCheckHelios, checkReflect, setCheckedReflect, loadingArabia, setLoadingArabia,
        loadingFundbot, setLoadingFundbot, loadingCOB, setLoadingCOB, loadingHelios, setLoadingHelios,
        loadingReflect, setLoadingReflect, startTimeArabia, setStartTimeArabia, endTimeArabia, setEndTimeArabia,
        startTimeFundbot, setStartTimeFundbot, endTimeFundbot, setEndTimeFundbot, startTimeCOB, setStartTimeCOB,
        endTimeCOB, setEndTimeCOB, startTimeHelios, setStartTimeHelios, endTimeHelios, setEndTimeHelios,
        startTimeReflect, setStartTimeReflect, endTimeReflect, setEndTimeReflect , darkMode
    } = useContext(CheckContext);

    const ifuserCheck = (check: boolean, setLoading: React.Dispatch<React.SetStateAction<boolean>>, startTime: string, endTime: string) => {
        if (!check) {
            toast.error('Please Choose System First..', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                className: 'custom-toast',
                transition: Bounce,
            });
            return;
        }
        if (!startTime || !endTime) {
            toast.error(' Please Enter Both Start/End Date Time..', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                className: 'custom-toast',
                transition: Bounce,
            });
            return;
        }
        setLoading(true);
    };

    return (
        <div className= {`tableParent ${darkMode ? "dark-mode" : ""}`}>
            <ToastContainer />
            <table className='SystemTable'>
                <thead>
                    <tr>
                        <th>Systems</th>
                        <th>Schedule</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='systemName'>
                            {
                                loadingArabia ? <i className="bi bi-arrow-repeat"></i> :
                                <input type='checkbox' id='Arabia' checked={checkArabia} onChange={(e) => setCheckedArabia(e.target.checked)} />
                            }
                            <label htmlFor='Arabia'>Arabia</label>
                        </td>
                        <td className='dateTime'>
                            <input type='datetime-local' value={startTimeArabia} onChange={(e) => setStartTimeArabia(e.target.value)} disabled={loadingArabia} className={startTimeArabia ? "showDateTime" : ""} />
                            <span> <i className="bi bi-arrow-right"></i> </span>
                            <input type='datetime-local' value={endTimeArabia} onChange={(e) => setEndTimeArabia(e.target.value)} disabled={loadingArabia} className={endTimeArabia ? "showDateTime" : ""} />
                        </td>
                        <td>
                            {
                                loadingArabia ?
                                    <>
                                        <i className="bi bi-stop-fill" onClick={() => setLoadingArabia(false)}></i>
                                        <i className="bi bi-download"></i>
                                    </> :
                                    <i className="bi bi-play-fill" onClick={() => ifuserCheck(checkArabia, setLoadingArabia, startTimeArabia, endTimeArabia)}></i>
                            }
                        </td>
                    </tr>

                    <tr>
                        <td className='systemName'>
                            {
                                loadingFundbot ? <i className="bi bi-arrow-repeat"></i> :
                                <input type='checkbox' id='FundBot' checked={checkFundbot} onChange={(e) => setCheckFundbot(e.target.checked)} />
                            }
                            <label htmlFor='FundBot'>FundBot</label>
                        </td>
                        <td className='dateTime'>
                            <input type='datetime-local' value={startTimeFundbot} onChange={(e) => setStartTimeFundbot(e.target.value)} disabled={loadingFundbot} className={startTimeFundbot ? "showDateTime" : ""} />
                            <span> <i className="bi bi-arrow-right"></i> </span>
                            <input type='datetime-local' value={endTimeFundbot} onChange={(e) => setEndTimeFundbot(e.target.value)} disabled={loadingFundbot} className={endTimeFundbot ? "showDateTime" : ""} />
                        </td>
                        <td>
                            {
                                loadingFundbot ?
                                    <>
                                        <i className="bi bi-stop-fill" onClick={() => setLoadingFundbot(false)}></i>
                                        <i className="bi bi-download"></i>
                                    </> :
                                    <i className="bi bi-play-fill" onClick={() => ifuserCheck(checkFundbot, setLoadingFundbot, startTimeFundbot, endTimeFundbot)}></i>
                            }
                        </td>
                    </tr>

                    <tr>
                        <td className='systemName'>
                            {
                                loadingCOB ? <i className="bi bi-arrow-repeat"></i> :
                                <input type='checkbox' id='COB' checked={checkCOB} onChange={(e) => setCheckCOB(e.target.checked)} />
                            }
                            <label htmlFor='COB'>COB</label>
                        </td>
                        <td className='dateTime'>
                            <input type='datetime-local' value={startTimeCOB} onChange={(e) => setStartTimeCOB(e.target.value)} disabled={loadingCOB} className={startTimeCOB ? "showDateTime" : ""} />
                            <span> <i className="bi bi-arrow-right"></i> </span>
                            <input type='datetime-local' value={endTimeCOB} onChange={(e) => setEndTimeCOB(e.target.value)} disabled={loadingCOB} className={endTimeCOB ? "showDateTime" : ""} />
                        </td>
                        <td>
                            {
                                loadingCOB ?
                                    <>
                                        <i className="bi bi-stop-fill" onClick={() => setLoadingCOB(false)}></i>
                                        <i className="bi bi-download"></i>
                                    </> :
                                    <i className="bi bi-play-fill" onClick={() => ifuserCheck(checkCOB, setLoadingCOB, startTimeCOB, endTimeCOB)}></i>
                            }
                        </td>
                    </tr>

                    <tr>
                        <td className='systemName'>
                            {
                                loadingHelios ? <i className="bi bi-arrow-repeat"></i> :
                                <input type='checkbox' id='Helios' checked={checkHelios} onChange={(e) => setCheckHelios(e.target.checked)} />
                            }
                            <label htmlFor='Helios'>Helios</label>
                        </td>
                        <td className='dateTime'>
                            <input type='datetime-local' value={startTimeHelios} onChange={(e) => setStartTimeHelios(e.target.value)} disabled={loadingHelios} className={startTimeHelios ? "showDateTime" : ""} />
                            <span> <i className="bi bi-arrow-right"></i> </span>
                            <input type='datetime-local' value={endTimeHelios} onChange={(e) => setEndTimeHelios(e.target.value)} disabled={loadingHelios} className={endTimeHelios ? "showDateTime" : ""} />
                        </td>
                        <td>
                            {
                                loadingHelios ?
                                    <>
                                        <i className="bi bi-stop-fill" onClick={() => setLoadingHelios(false)}></i>
                                        <i className="bi bi-download"></i>
                                    </> :
                                    <i className="bi bi-play-fill" onClick={() => ifuserCheck(checkHelios, setLoadingHelios, startTimeHelios, endTimeHelios)}></i>
                            }
                        </td>
                    </tr>

                    <tr>
                        <td className='lasele systemName'>
                            {
                                loadingReflect ? <i className="bi bi-arrow-repeat"></i> :
                                    <input type='checkbox' id='Reflect' checked={checkReflect} onChange={(e) => setCheckedReflect(e.target.checked)} />
                            }
                            <label htmlFor='Reflect'>Reflect</label>
                        </td>
                        <td className='lasele dateTime'>
                            <input type='datetime-local' value={startTimeReflect} onChange={(e) => setStartTimeReflect(e.target.value)} disabled={loadingReflect} className={startTimeReflect ? "showDateTime" : ""} />
                            <span> <i className="bi bi-arrow-right"></i> </span>
                            <input type='datetime-local' value={endTimeReflect} onChange={(e) => setEndTimeReflect(e.target.value)} disabled={loadingReflect} className={endTimeReflect ? "showDateTime" : ""} />
                        </td>
                        <td className='lasele'>
                            {
                                loadingReflect ?
                                    <>
                                        <i className="bi bi-stop-fill" onClick={() => setLoadingReflect(false)}></i>
                                        <i className="bi bi-download"></i>
                                    </> :
                                    <i className="bi bi-play-fill" onClick={() => ifuserCheck(checkReflect, setLoadingReflect, startTimeReflect, endTimeReflect)}></i>
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default System;
