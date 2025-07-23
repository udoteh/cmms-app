// src/pages/WorkOrderList.jsx
import { useEffect, useState } from 'react';
import { getWorkOrders } from '../services/api';

const WorkOrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getWorkOrders().then(response => setOrders(response.data));
  }, []);

  return (
    <div>
      <h2>Work Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.title} - {order.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkOrderList;
