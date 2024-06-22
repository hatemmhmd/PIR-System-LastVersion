import { useContext, useEffect } from 'react';
import '../SystemName-Date/SystemName.css';
import { CheckContext } from '../CutomHook/CustomHookProvider';

const SystemName = () => {
  const { selectedModule, dateTime } = useContext(CheckContext);

  useEffect(() => {
    localStorage.setItem("DateTime", JSON.stringify(dateTime));
  }, [dateTime]);

  const formatDateTime = (dateTime: string | null): string => {
    if (!dateTime) return 'Invalid Date';
    const date = new Date(dateTime);
    if (isNaN(date.getTime())) return 'Invalid Date';
    return date.toLocaleString('en-US', {
      year: 'numeric',
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(',', '');
  }

  return (
    <div className='NameMoudule-startDate'>
      <h1>{selectedModule}</h1>
      <h1>Start Date : <span>{formatDateTime(dateTime)}</span></h1>
    </div>
  );
}

export default SystemName;
