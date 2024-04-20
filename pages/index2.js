import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
 
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';

function Page() {
  return (
    <div className="glassmorphism">
      <Navbar />
      <Hero />
      <div className="glassmorphism">
        <About />
        <div className="glassmorphism" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        
        {/* <SignIn /> */}
        <div className="glassmorphism" />
        <WhatsNew />
      </div>
      <div className="glassmorphism" />
        <Feedback />
      <World />
      <div className="glassmorphism">
        <Insights />
        
      </div>
      <Footer />
    </div>
  );
}

export default Page;
