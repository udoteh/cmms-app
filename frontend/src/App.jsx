import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EquipmentList from './pages/EquipmentList';
import WorkOrderList from './pages/WorkOrderList';
import MaintenanceList from './pages/MaintenanceList';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/assets" element={<EquipmentList />} />
        <Route path="/work-orders" element={<WorkOrderList />} />
        <Route path="/maintenance" element={<MaintenanceList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
