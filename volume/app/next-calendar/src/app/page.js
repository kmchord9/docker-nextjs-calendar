"use client";

import { useState, useEffect, useContext } from "react";
import { getMonth } from "./util";
import { CalendarHeader } from "./components/CalendarHeader";
import { Sidebar } from "./components/Sidebar";
import { Month } from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import dayjs from "dayjs";
import { EventModal } from "./components/EventModal";

export default function Home() {
  const [currentMonth, setCurrentMonth ] = useState(getMonth());
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  
  return (
    <>
      <GlobalContext.Provider 
        value={{
          monthIndex,
          setMonthIndex,
          daySelected,
          setDaySelected,
          showEventModal,
          setShowEventModal,
        }}
        >
        { showEventModal && <EventModal />}
        <div className="h-screen flex flex-col">
            <CalendarHeader />
            <div className="flex flex-1">
              <Sidebar />
              <Month month={currentMonth} />
            </div>
        </div>
      </GlobalContext.Provider>
    </>
  );
}
