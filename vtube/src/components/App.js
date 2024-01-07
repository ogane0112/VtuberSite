import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
import { SidebarProvider } from './SidebarContext';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import "../style/App.css"
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="App">
       <SidebarProvider>
            <Router>
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            </Router>
      </SidebarProvider>
    </div>
  );
}

export default App;
