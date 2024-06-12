import React from 'react';
import { Homepage } from './components/Homepage';
import  {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Writeblog } from './components/Writeblog';

// Ensure Writeblog is imported correctly if needed

function App() {
  return (
    <BrowserRouter>
           <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/writeblog" element={<Writeblog />} />
           </Routes>
     </BrowserRouter>
  );
}

export default App;