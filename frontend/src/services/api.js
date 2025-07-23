// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/',  // adjust for Docker/production if needed
});

export const getEquipment = () => API.get('equipment/');
export const getWorkOrders = () => API.get('workorders/');
export const getSchedules = () => API.get('schedules/');
