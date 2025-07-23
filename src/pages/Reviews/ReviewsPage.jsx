import React from 'react'
import ChromaGrid from '../animations/ChromaGrid/ChromaGrid/ChromaGrid.jsx'
import ScrollVelocity from '../animations/scroll/ScrollVelocity/ScrollVelocity.jsx'
import lipsR from '../../assets/images/about/lipsR.webp'
import serumR from '../../assets/images/about/serumR.jpg'
import r4 from '../../assets/images/about/sunscreenR.jpg'
import r5 from '../../assets/images/about/faseMaskR.jpeg'
import './ReviewsPage.css'


const items = [
 {
    image:"https://media.istockphoto.com/id/1294166823/photo/close-up-of-woman-applying-moisturizing-nourishing-balm-to-her-lips-with-her-finger-to.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z9AlQMLcnyoPy7GLU5XStmQN8XSikpskGetKUJ8m2Y8=",

    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
  
  },
  {
    image:"https://plus.unsplash.com/premium_photo-1677283511146-52fa442feb2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNraW4lMjBjYXJlfGVufDB8fDB8fHww",
   
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
 
  },
  {
    image:"https://media.istockphoto.com/id/1331093282/photo/shot-of-a-young-women-in-bathrobe-applying-hand-cream-moisture-at-home.jpg?s=612x612&w=0&k=20&c=SWqAiprmuD4AFuF_3wmSVYP3pp5xhsthYXy4oePKdhs=",
 
   
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    
  },
   {
    image:"https://media.istockphoto.com/id/1934762664/photo/young-beautiful-woman-applying-face-serum.jpg?s=612x612&w=0&k=20&c=y-QDEYhHDkcDvBBVyd9ZnGglPYzVuJCFrNvql8TJPbE=",

    
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
  
  },
   {
    image:"https://media.istockphoto.com/id/1399453703/photo/closeup-of-one-young-indian-man-applying-moisturiser-lotion-to-his-face-while-grooming.jpg?s=612x612&w=0&k=20&c=Se_vfd4Bi8bEQNoZ7fjWAg0l7mOqDstCI_KkZBfmM40=",
 
   
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
  
  },
   {
    image:"https://media.istockphoto.com/id/2217906373/photo/smiling-woman-holding-cotton-pad-during-skincare-routine-at-home.jpg?s=612x612&w=0&k=20&c=5_61i-l4ei09k0VKl54_Ak0MMqsmvyWM5prVblXEvoo=",
   
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
  
  },

];



const ReviewsPage = () => {
  return (
  <div className='photogrid-wrapper'>
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
</div>
  )
}

export default ReviewsPage
