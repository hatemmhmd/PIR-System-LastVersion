import {useContext, useState } from 'react';
import data from '../../Data/Data.json';
import '../Modulee/Module.css';
import { CheckContext} from '../CutomHook/CustomHookProvider';

const Modules = () => {

  const { selectedModule } = useContext(CheckContext);

  const [ShowDetails , setShowDeatils] = useState(false);
  const [selectId , setSelectId] = useState<number|undefined>(0);

  const ShowData = (id : number) =>{
    const arr = data.find((e) => {return(e.id == id)});
    setSelectId(arr?.id);
    setShowDeatils(true);
  }

  const getColor = (success: number, failures: number, business: number) => {
    if (success > failures && success > business) {
      return 'green';
    } else if (failures > success && failures > business) {
      return 'red';
    } else if(business > success && business > failures){
      return 'yellow';
    }
    else{
      return "blue";
    }
  };

  return (
    <div className="modules">
    <div>
      <h1>Modules</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Success</th>
            <th>Failures</th>
            <th>Business</th>
          </tr>
        </thead>
        <tbody>
          {data.filter(system => system.SystemName === selectedModule).map(system =>
            system.modules.map((module, index) => (
              <>
              <tr key={`${system.id}-${index}`}>
                <td className='special' onClick={()=>{ShowData(system.id)}}>
                <span 
              className="status-indicator" style={{backgroundColor:`${getColor(module.status.success , module.status.errors , module.status.warnings)}`}}>
              </span>
                  {module.moduleName}
                  </td>
                <td>{module.status.success}</td>
                <td>{module.status.errors}</td>
                <td>{module.status.warnings}</td>
              </tr>
              
                {ShowDetails && selectId == system.id &&(
                    <div className='contentDetails'>
                  {system.modules.map((e)=>
                  {
                    return(
                      e.detailedStatus.map((ele)=>{
                        return(
                          ele.details.map((ele)=>{
                            return(
                              <div className='Alldetails'>
                              <p>{ele.succsee}</p>
                              <p>{ele.error}</p>
                              <p>{ele.warning}</p>
                            </div>
                            )
                          })
                        )
                      })
                    )
                  })}
                  <div className='canleBtn' onClick={()=>setShowDeatils(false)}>
                    <i className="bi bi-x-lg"></i>
                  </div>
                  </div>
                )
                }
              </>
            ))
          )}
        </tbody>
      </table>
    </div>
    </div>
);}

export default Modules;
