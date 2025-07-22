
import React from 'react';
import { CardSwap, Card } from '../../animations/CardSwap/CardSwap.jsx';
import './CardSection.css'
import s1 from '../../../assets/images/products/s1.jpg';
import se6 from '../../../assets/images/products/se6.jpg';
import l1 from '../../../assets/images/products/l1.jpg';


const CardSection = () => {
  return (
    <>
    <div className="cardSectionMain">
      <div className="texsection">
        
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
        <Card>
  <img src={s1} alt="Icon" style={{ width: '415px', height:'350px', padding: '1rem' }} />

</Card>

        <Card>
  <img src={se6} alt="Icon" style={{ width: '415px', height:'350px', padding: '1rem' }} />

</Card>
        <Card>
  <img src={l1} alt="Icon" style={{ width: '415px', height:'350px', padding: '1rem' }} />

</Card>
      </CardSwap>
    </div>
    </div>
    
    </>
  );
};

export default CardSection;
