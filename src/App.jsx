import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Skills, Works } from './components';

const App = () => {
  return (
    <BrowserRouter>
      {/* Flex container for sticky footer */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0A0E0F] text-[#1A1A1A] dark:text-[#F8FAFC] transition-all duration-300">

        {/* Navbar always at the top */}
        <Navbar />

        {/* Main content stretches to fill space */}
        <main className="flex-grow pt-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Works />
          <Contact />
        </main>

        {/* Footer always sticks to bottom even if content is short */}
       <footer className="text-center text-sm text-gray-300 py-6 px-4 rounded-t-xl border-t border-white/10 bg-glass-gradient backdrop-blur-glass hover:text-white hover:drop-shadow-[0_0_5px_#13B7A5] transition">
  © 2025 Kruthika T - All rights reserved.
</footer>

      </div>
    </BrowserRouter>
  );
};

export default App;
