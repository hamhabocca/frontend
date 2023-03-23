import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardLayout from './layouts/BoardLayout';
import RallyBoard from './pages/RallyBoard';
import './App.css';

// 브라우저별 기본 CSS 스타일 초기화
import '../src/reset.css';
import Menubar from './components/commons/Menubar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route index element={<Menubar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
