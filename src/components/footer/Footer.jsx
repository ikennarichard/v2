import { useEffect } from "react";

const Footer = () => {
 useEffect(() => {
   const contactSection = document.querySelector('#contact');
   const spanElement = document.querySelector('.date');

   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         // When entering the viewport
         spanElement.style.transform = 'rotate(0)';
         spanElement.style.left = '6px';
         spanElement.style.bottom = '3px';
       } else {
         // When leaving the viewport
         spanElement.style.transform = 'rotate(-90deg)';
         spanElement.style.left = '-2em';
         spanElement.style.bottom = '5em';
       }
     });
   }, { threshold: 0.5 });

   observer.observe(contactSection);

   // Cleanup
   return () => observer.disconnect();
 }, []);

 return (
   <span 
     style={{ 
       fontSize: '0.66rem', 
       color: 'grey',
       position: 'fixed',
       bottom: '5em',
       left: '-2em',
       transition: 'transform 0.4s ease, left 0.3s ease',
       transform: 'rotate(-90deg)',
       letterSpacing: '0.2px'
     }}
     className="date"
   >
     <i>©2023/PRESENT</i>
   </span>
 );
}

export default Footer;
