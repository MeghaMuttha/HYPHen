import { useEffect, useRef } from 'react';
import './FounderPage.css';
import { gsap } from 'gsap';
import CircularGallery from "../animations/CircularGallary/circularImages/CircularGallery.jsx"
import VariableProximity from '../animations/VariableP/VariableProximity/VariableProximity.jsx';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Register plugin
gsap.registerPlugin(ScrollTrigger);

const FounderPage = () => {
 const containerRef = useRef(null);
return (
    <section className="founders-section">
     
       <div ref={containerRef}
       className='founders-heading '
       style={{position: 'relative'}}>
                 <VariableProximity
           label={"Meet the Visionaries Behind HYPHen"}
           className={'variable-proximity-demo'}
           fromFontVariationSettings="'wght' 400, 'opsz' 9"
           toFontVariationSettings="'wght' 1000, 'opsz' 40"
           containerRef={containerRef}
           radius={60}
           tag="h1"
           falloff='linear'
          
         />   
         <br></br>
        </div>
      
      <div>
            <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
      </div>
          </div>
    </section>

  );
};

export default FounderPage;
