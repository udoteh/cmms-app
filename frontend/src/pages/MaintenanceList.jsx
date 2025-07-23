// src/pages/MaintenanceList.jsx
import { useEffect, useState } from 'react';
import { getSchedules } from '../services/api';

const MaintenanceList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    getSchedules().then(response => setSchedules(response.data));
  }, []);

  return (
    <div>
      <h2>Maintenance Schedule</h2>
      <ul>
        {schedules.map(schedule => (
          <li key={schedule.id}>
            Equipment ID: {schedule.equipment} - Date: {schedule.schedule_date} - Frequency: {schedule.frequency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaintenanceList;
