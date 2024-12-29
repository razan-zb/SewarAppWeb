import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css'; 

const MyCalendar = () => {
  const markedDates = ['2024-08-21', '2024-08-29'];

  return (
    <div className="calendar-container">
      <Calendar
        locale="en-US"
        tileClassName={({ date, view }) =>
          view === 'month' && markedDates.includes(date.toISOString().split('T')[0]) ? 'highlight' : ''
        }
        prevLabel={<span className="nav-arrow">{'<'}</span>}
        nextLabel={<span className="nav-arrow">{'>'}</span>}
      />
    </div>
  );
};

export default MyCalendar;