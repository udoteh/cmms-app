
import { useEffect, useState } from 'react';
import { getEquipment } from '../services/api';

const EquipmentList = () => {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    getEquipment().then(response => setEquipment(response.data));
  }, []);

  return (
    <div>
      <h2>Equipment List</h2>
      <ul>
        {equipment.map(item => (
          <li key={item.id}>{item.name} - {item.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default EquipmentList;

