import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date: any) => {
    setSelectedDate(date);
    // Add your logic for handling date selection
  };

  const renderCalendar = () => {
    // Replace this with your logic to generate calendar days
    const days = Array.from({ length: 31 }, (_, index) => index + 1);

    return days.map((day) => (
      <div
        key={day}
        className={`calendarDay ${selectedDate === day ? 'selectedDay' : ''}`}
        onClick={() => handleDateClick(day)}
      >
        {day}
      </div>
    ));
  };

  return (
    <div className='calendarContainer'>
      <div className='calendarDays'>{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
