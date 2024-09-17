import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddRecordForm from './components/AddRecordForm';
import RecordDetail from './components/RecordDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/health-records" element={<Dashboard />} />
        <Route path="/health-records/add" element={<AddRecordForm />} />
        <Route path="/health-records/:id" element={<RecordDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
