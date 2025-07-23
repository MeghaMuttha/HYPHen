import React from 'react'
import ChromaGrid from '../animations/ChromaGrid/ChromaGrid/ChromaGrid.jsx'
import ScrollVelocity from '../animations/scroll/ScrollVelocity/ScrollVelocity.jsx'
import lipsR from '../../assets/images/about/lipsR.webp'
import serumR from '../../assets/images/about/serumR.jpg'
import r4 from '../../assets/images/about/sunscreenR.jpg'
import r5 from '../../assets/images/about/faseMaskR.jpeg'
const items = [
 {
    image:serumR,
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
  
  },
  {
    image:r4,
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
 
  },
  {
    image:r5,
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    
  },
   {
    image:lipsR,
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
  
  },

];



const ReviewsPage = () => {
  return (
  <>
   <div
    className='photogrid'
   style={{ height: '600px', position: 'relative', marginTop: '2rem' }}>
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</div>
<div
style={{marginTop: '2rem', marginBottom: '2rem'}}
>
  <ScrollVelocity
  texts={['Skincare that listens.', 'Results that speak.' ]} 
  velocity={50}
  className="custom-scroll-text"
/>
</div>
</>
  )
}

export default ReviewsPage
