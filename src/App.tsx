import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Home />} />
        <Route path="/statements" element={<Home />} />
        <Route path="*" element={<NoMatch/>} />
      </Route>
      
    </Routes>
  );
}

export default App;
