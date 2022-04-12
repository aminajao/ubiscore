import GlobalStyle from './globalStyle';
import { Signup, Success } from './pages/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
