import './App.css';
import './assert/vendor/bootstrap-icons/bootstrap-icons.css'

import Header from './components/Header';



import { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from 'aos';
import Main from './components/Main';
import Collection from './components/Collection';
import Roadmap from './components/Roadmap';
import Faq from './components/Faq';
import Club from './components/Club';
import Footer from './components/Footer';
import About from './components/About';

function App() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
 

  return (
    <div className="App">

      <Header />

      <main id="main" data-spy="scroll" data-target="#header" data-offset="0">

        <Main />
        <About />
        <Collection />
        <Roadmap />
        <Club />
        <Faq />

      </main>

      <Footer />

    </div>
  );
}

export default App;
