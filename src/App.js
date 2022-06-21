import './App.scss';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import TestingProcess from './components/TestingProcess';
import TestingProvide from './components/TestingProvide';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AboutUs />
        <Services />
        <Testimonial />
        <TestingProvide />
        <TestingProcess />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
