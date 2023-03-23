import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardLayout from './layouts/BoardLayout';
import RallyBoard from './pages/RallyBoard';
import './App.css';

// 브라우저별 기본 CSS 스타일 초기화
import '../src/reset.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <BoardLayout/> }>
          <Route index element={ <RallyBoard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
