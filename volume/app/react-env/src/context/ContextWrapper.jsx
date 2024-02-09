import React, { useReducer, useState, useEffect } from "react";
import GlobalContext from "@/context/GlobalContext";
import dayjs from "dayjs";

const saveEventsReducer = (state, { type, payload }) => {
  switch (type) {
    case "push":
      return [...state, payload];
    default:
      throw new Error();
  }
};

const initEvents = () => {
  const storageEvents = localStorage.getItem("saveEvents");
  const parsedEvents = storageEvents ? JOSN.parse(storageEvents) : [];
  return parsedEvents;
};

const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [ savedEvents, dispatchCalEvent] = useReducer(
    saveEventsReducer,
    [],
    initEvents
  );
  useEffect(() => {
    // 以下構文でlocalStorageに保存
    // localStorage.setItem('key', 'value')
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));    
  }, [savedEvents]);

  return (
    <GlobalContext.Provider 
      value={{ 
        monthIndex, 
        setMonthIndex,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal, 
        dispatchCalEvent,
        savedEvents,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;