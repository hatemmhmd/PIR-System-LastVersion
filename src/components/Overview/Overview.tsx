import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import data from '../../Data/Data.json';
import '../Overview/overview.css';
import { useContext, useEffect, useState } from 'react';
import { CheckContext } from '../CutomHook/CustomHookProvider';

const Overview = () => {
  const { selectedModule } = useContext(CheckContext);
  const [sumSuccess, setSumSuccess] = useState(0);
  const [sumFailures, setSumFailures] = useState(0);
  const [sumBusiness, setBusiness] = useState(0);

  useEffect(() => {
    if (selectedModule) {
      let sumSucc = 0;
      let sumError = 0;
      let sumWar = 0;
      data.filter((e) => e.SystemName === selectedModule).forEach((e) => {
        e.modules.forEach((ele) => {
          sumSucc += ele.status.success;
          sumError += ele.status.errors;
          sumWar += ele.status.warnings;
        });
      });
      setSumSuccess(sumSucc);
      setSumFailures(sumError);
      setBusiness(sumWar);
    } else {
      setSumSuccess(0);
      setSumFailures(0);
      setBusiness(0);
    }
  }, [selectedModule]);

  const dataChart = {
    datasets: [{
      data: [sumSuccess, sumFailures, sumBusiness],
      backgroundColor: ['#4caf50', '#f44336', '#ff9800'],
    }]
  };

  if (!selectedModule) {
    return (
      <div className="overview">
        <div className='head'>
          <h2>Overview</h2>
        </div>
        <div className="no-data">
          <p>No data available. Please select a system.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overview">
      <div className='head'>
        <h2>Overview</h2>
        <button>export</button>
      </div>
      <div className="stats">
        <p>Success: {sumSuccess}</p>
        <p>Failures: {sumFailures}</p>
        <p>Business: {sumBusiness}</p>
      </div>
      <Doughnut data={dataChart} className='chartDesign' />
    </div>
  );
}

export default Overview;
