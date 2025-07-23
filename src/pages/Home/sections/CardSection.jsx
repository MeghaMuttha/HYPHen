import React, { useRef } from 'react';
import { CardSwap, Card } from '../../animations/CardSwap/CardSwap.jsx';
import VariableProximity from '../../animations/VariableP/VariableProximity/VariableProximity.jsx';
import './CardSection.css';

import s1 from '../../../assets/images/products/s1.jpg';
import se6 from '../../../assets/images/products/se6.jpg';
import l1 from '../../../assets/images/products/l1.jpg';

const CardSection = () => {
  const containerRef = useRef(null);

  return (
    <>
      <div className="cardSectionMain">
        <div className="texsection">
          <div ref={containerRef} style={{ position: 'relative' }}>
            <VariableProximity
              label={'Powered by nature, perfected by HYPHen.'}
              className="variable-proximity-demo"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={60}
              tag="h1"
              falloff="linear"
            />
            <br />
            <VariableProximity
              label={''}
              className="variable-proximity-demo"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={60}
              tag="h1"
              falloff="linear"
            />
          </div>
        </div>

        <div className="card-swap-wrapper">
          <div className="card-swap-container">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <img
                  src={s1}
                  alt="Icon"
                  style={{ width: '415px', height: '350px', padding: '1rem' }}
                />
              </Card>
              <Card>
                <img
                  src={se6}
                  alt="Icon"
                  style={{ width: '415px', height: '350px', padding: '1rem' }}
                />
              </Card>
              <Card>
                <img
                  src={l1}
                  alt="Icon"
                  style={{ width: '415px', height: '350px', padding: '1rem' }}
                />
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
