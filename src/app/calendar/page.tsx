'use client';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Head from 'next/head'

const Calendars = () => {
  return (
    <div className="max-w-screen">
      <Head>
        <title>Calendar</title>
      </Head>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        editable={true}
        height={'90vh'}
      />
    </div>
  );
};

export default Calendars;
