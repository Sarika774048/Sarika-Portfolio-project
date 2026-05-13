import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

type Page = 'home' | 'experience' | 'projects' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main key={currentPage} className="animate-fade-in">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
