import { Route, Routes } from 'react-router-dom';
import Books from './Books';
import AddBooks from './AddBooks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/add" element={<AddBooks />} />
      </Routes>
    </div>
  );
}

export default App;
