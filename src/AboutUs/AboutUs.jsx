import './AboutUs.css';
import BrandnameSec from './components/BrandnameSec';
import { useRef } from 'react';
import WhoAreWe from './components/Whoarewe';
import OurVision from './components/OurVision';

const AboutUs = () => {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const scrollTo = (section) => {
    section.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='aboutus'>
      <div ref={section1}>
        <BrandnameSec scrollTo={scrollTo} goToSectionRef={section2} />
      </div>
      <div ref={section2}>
        <WhoAreWe scrollTo={scrollTo} goToSectionRef={section3} />
      </div>
      <div ref={section3}>
        <OurVision scrollTo={scrollTo} goToSectionRef={section4} />
      </div>
      <div ref={section4}>{/* <ChooseYourCharacter /> */}</div>
    </div>
  );
};

export default AboutUs;
