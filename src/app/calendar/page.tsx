'use client'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendars = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='w-96'>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Calendars;
