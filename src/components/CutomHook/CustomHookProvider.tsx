import React, { ReactNode, createContext, useEffect, useState } from 'react';

interface CheckContextType {
  checkArabia: boolean;
  setCheckedArabia: React.Dispatch<React.SetStateAction<boolean>>;
  checkFundbot: boolean;
  setCheckFundbot: React.Dispatch<React.SetStateAction<boolean>>;
  checkCOB: boolean;
  setCheckCOB: React.Dispatch<React.SetStateAction<boolean>>;
  checkHelios: boolean;
  setCheckHelios: React.Dispatch<React.SetStateAction<boolean>>;
  checkReflect: boolean;
  setCheckedReflect: React.Dispatch<React.SetStateAction<boolean>>;
  loadingArabia: boolean;
  setLoadingArabia: React.Dispatch<React.SetStateAction<boolean>>;
  loadingFundbot: boolean;
  setLoadingFundbot: React.Dispatch<React.SetStateAction<boolean>>;
  loadingCOB: boolean;
  setLoadingCOB: React.Dispatch<React.SetStateAction<boolean>>;
  loadingHelios: boolean;
  setLoadingHelios: React.Dispatch<React.SetStateAction<boolean>>;
  loadingReflect: boolean;
  setLoadingReflect: React.Dispatch<React.SetStateAction<boolean>>;
  selectedModule: string | null;
  setSelectedModule: React.Dispatch<React.SetStateAction<string>>;
  startTimeArabia: string;
  setStartTimeArabia: React.Dispatch<React.SetStateAction<string>>;
  endTimeArabia: string;
  setEndTimeArabia: React.Dispatch<React.SetStateAction<string>>;
  startTimeFundbot: string;
  setStartTimeFundbot: React.Dispatch<React.SetStateAction<string>>;
  endTimeFundbot: string;
  setEndTimeFundbot: React.Dispatch<React.SetStateAction<string>>;
  startTimeCOB: string;
  setStartTimeCOB: React.Dispatch<React.SetStateAction<string>>;
  endTimeCOB: string;
  setEndTimeCOB: React.Dispatch<React.SetStateAction<string>>;
  startTimeHelios: string;
  setStartTimeHelios: React.Dispatch<React.SetStateAction<string>>;
  endTimeHelios: string;
  setEndTimeHelios: React.Dispatch<React.SetStateAction<string>>;
  startTimeReflect: string;
  setStartTimeReflect: React.Dispatch<React.SetStateAction<string>>;
  endTimeReflect: string;
  setEndTimeReflect: React.Dispatch<React.SetStateAction<string>>;
  dateTime: string | null;
  setDateTime: React.Dispatch<React.SetStateAction<string>>;







  darkMode : boolean;
  setDarkMode :React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: CheckContextType = {
  checkArabia: false,
  setCheckedArabia: () => {},
  checkFundbot: false,
  setCheckFundbot: () => {},
  checkCOB: false,
  setCheckCOB: () => {},
  checkHelios: false,
  setCheckHelios: () => {},
  checkReflect: false,
  setCheckedReflect: () => {},
  loadingArabia: false,
  setLoadingArabia: () => {},
  loadingFundbot: false,
  setLoadingFundbot: () => {},
  loadingCOB: false,
  setLoadingCOB: () => {},
  loadingHelios: false,
  setLoadingHelios: () => {},
  loadingReflect: false,
  setLoadingReflect: () => {},
  selectedModule: '',
  setSelectedModule: () => {},
  startTimeArabia: '',
  setStartTimeArabia: () => {},
  endTimeArabia: '',
  setEndTimeArabia: () => {},
  startTimeFundbot: '',
  setStartTimeFundbot: () => {},
  endTimeFundbot: '',
  setEndTimeFundbot: () => {},
  startTimeCOB: '',
  setStartTimeCOB: () => {},
  endTimeCOB: '',
  setEndTimeCOB: () => {},
  startTimeHelios: '',
  setStartTimeHelios: () => {},
  endTimeHelios: '',
  setEndTimeHelios: () => {},
  startTimeReflect: '',
  setStartTimeReflect: () => {},
  endTimeReflect: '',
  setEndTimeReflect: () => {},
  dateTime: '',
  setDateTime: () => {},






  darkMode : false,
  setDarkMode : () => {},
};

export const CheckContext = createContext<CheckContextType>(defaultValue);

export const CustomHookProvider = ({ children }: { children: ReactNode }) => {
  const [checkArabia, setCheckedArabia] = useState<boolean>(JSON.parse(localStorage.getItem('checkArabia') || 'false'));
  const [checkFundbot, setCheckFundbot] = useState<boolean>(JSON.parse(localStorage.getItem('checkFundbot') || 'false'));
  const [checkCOB, setCheckCOB] = useState<boolean>(JSON.parse(localStorage.getItem('checkCOB') || 'false'));
  const [checkHelios, setCheckHelios] = useState<boolean>(JSON.parse(localStorage.getItem('checkHelios') || 'false'));
  const [checkReflect, setCheckedReflect] = useState<boolean>(JSON.parse(localStorage.getItem('checkReflect') || 'false'));
  const [loadingArabia, setLoadingArabia] = useState<boolean>(JSON.parse(localStorage.getItem('loadingArabia') || 'false'));
  const [loadingFundbot, setLoadingFundbot] = useState<boolean>(JSON.parse(localStorage.getItem('loadingFundbot') || 'false'));
  const [loadingCOB, setLoadingCOB] = useState<boolean>(JSON.parse(localStorage.getItem('loadingCOB') || 'false'));
  const [loadingHelios, setLoadingHelios] = useState<boolean>(JSON.parse(localStorage.getItem('loadingHelios') || 'false'));
  const [loadingReflect, setLoadingReflect] = useState<boolean>(JSON.parse(localStorage.getItem('loadingReflect') || 'false'));
  const [selectedModule, setSelectedModule] = useState<string>('');
  const [dateTime , setDateTime] = useState<string>(JSON.parse(localStorage.getItem('DateTime') || 'false'));
  const [startTimeArabia, setStartTimeArabia] = useState(localStorage.getItem('startTimeArabia') || '');
  const [endTimeArabia, setEndTimeArabia] = useState(localStorage.getItem('endTimeArabia') || '');
  const [startTimeFundbot, setStartTimeFundbot] = useState(localStorage.getItem('startTimeFundbot') || '');
  const [endTimeFundbot, setEndTimeFundbot] = useState(localStorage.getItem('endTimeFundbot') || '');
  const [startTimeCOB, setStartTimeCOB] = useState(localStorage.getItem('startTimeCOB') || '');
  const [endTimeCOB, setEndTimeCOB] = useState(localStorage.getItem('endTimeCOB') || '');
  const [startTimeHelios, setStartTimeHelios] = useState(localStorage.getItem('startTimeHelios') || '');
  const [endTimeHelios, setEndTimeHelios] = useState(localStorage.getItem('endTimeHelios') || '');
  const [startTimeReflect, setStartTimeReflect] = useState(localStorage.getItem('startTimeReflect') || '');
  const [endTimeReflect, setEndTimeReflect] = useState(localStorage.getItem('endTimeReflect') || '');





  const [darkMode , setDarkMode] = useState<boolean>(JSON.parse(localStorage.getItem('DarkMode') || 'false'));



  useEffect(()=>{
    localStorage.setItem("DarkMode" , JSON.stringify(darkMode))
  } , [darkMode])


  useEffect(() => {
    localStorage.setItem('checkArabia', JSON.stringify(checkArabia));
  }, [checkArabia]);

  useEffect(() => {
    localStorage.setItem('checkFundbot', JSON.stringify(checkFundbot));
  }, [checkFundbot]);

  useEffect(() => {
    localStorage.setItem('checkCOB', JSON.stringify(checkCOB));
  }, [checkCOB]);

  useEffect(() => {
    localStorage.setItem('checkHelios', JSON.stringify(checkHelios));
  }, [checkHelios]);

  useEffect(() => {
    localStorage.setItem('checkReflect', JSON.stringify(checkReflect));
  }, [checkReflect]);

  useEffect(() => {
    localStorage.setItem('loadingArabia', JSON.stringify(loadingArabia));
  }, [loadingArabia]);

  useEffect(() => {
    localStorage.setItem('loadingFundbot', JSON.stringify(loadingFundbot));
  }, [loadingFundbot]);

  useEffect(() => {
    localStorage.setItem('loadingCOB', JSON.stringify(loadingCOB));
  }, [loadingCOB]);

  useEffect(() => {
    localStorage.setItem('loadingHelios', JSON.stringify(loadingHelios));
  }, [loadingHelios]);

  useEffect(() => {
    localStorage.setItem('loadingReflect', JSON.stringify(loadingReflect));
  }, [loadingReflect]);

  useEffect(() => {
    localStorage.setItem('startTimeArabia', startTimeArabia);
  }, [startTimeArabia]);

  useEffect(() => {
    localStorage.setItem('endTimeArabia', endTimeArabia);
  }, [endTimeArabia]);

  useEffect(() => {
    localStorage.setItem('startTimeFundbot', startTimeFundbot);
  }, [startTimeFundbot]);

  useEffect(() => {
    localStorage.setItem('endTimeFundbot', endTimeFundbot);
  }, [endTimeFundbot]);

  useEffect(() => {
    localStorage.setItem('startTimeCOB', startTimeCOB);
  }, [startTimeCOB]);

  useEffect(() => {
    localStorage.setItem('endTimeCOB', endTimeCOB);
  }, [endTimeCOB]);

  useEffect(() => {
    localStorage.setItem('startTimeHelios', startTimeHelios);
  }, [startTimeHelios]);

  useEffect(() => {
    localStorage.setItem('endTimeHelios', endTimeHelios);
  }, [endTimeHelios]);

  useEffect(() => {
    localStorage.setItem('startTimeReflect', startTimeReflect);
  }, [startTimeReflect]);

  useEffect(() => {
    localStorage.setItem('endTimeReflect', endTimeReflect);
  }, [endTimeReflect]);

  const values = {checkArabia,setCheckedArabia,checkFundbot,setCheckFundbot,checkCOB,setCheckCOB,
    checkHelios,setCheckHelios,checkReflect,setCheckedReflect,loadingArabia,setLoadingArabia,loadingFundbot,
    setLoadingFundbot,loadingCOB,setLoadingCOB,loadingHelios,setLoadingHelios,loadingReflect,setLoadingReflect,
    selectedModule,setSelectedModule,startTimeArabia,setStartTimeArabia,endTimeArabia,setEndTimeArabia,
    startTimeFundbot,setStartTimeFundbot,endTimeFundbot,setEndTimeFundbot,startTimeCOB,setStartTimeCOB,
    endTimeCOB,setEndTimeCOB,startTimeHelios,setStartTimeHelios,endTimeHelios,setEndTimeHelios,startTimeReflect,
    setStartTimeReflect,endTimeReflect,setEndTimeReflect,dateTime,setDateTime , darkMode , setDarkMode};

  return (
    <CheckContext.Provider value={values}>
      {children}
    </CheckContext.Provider>
  );
};
