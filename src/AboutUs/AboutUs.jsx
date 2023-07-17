import './AboutUs.css';
import BrandnameSec from './components/BrandnameSec';
import { useRef } from 'react';
import WhoAreWe from './components/WhoWeAre';
import OurMission from './components/OurMission';
import TeamMember from './components/TeamMember';

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
        <TeamMember scrollTo={scrollTo} goToSectionRef={section3} />
      </div>
      <div ref={section3}>
        <WhoAreWe scrollTo={scrollTo} goToSectionRef={section4} />
      </div>
      <div ref={section4}>
        <OurMission />
      </div>
    </div>
  );
};

export default AboutUs;
