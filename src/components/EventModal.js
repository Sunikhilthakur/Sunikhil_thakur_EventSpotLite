// import React, { useEffect, useState } from 'react';
// import './EventModal.css';  // Import modal-specific styles

// function EventModal({ event, onClose }) {
//   const [isClosing, setIsClosing] = useState(false);

//   const handleClose = () => {
//     setIsClosing(true);  // Trigger fade-out effect
//     setTimeout(onClose, 300);  // Wait for animation before closing
//   };

//   useEffect(() => {
//     setIsClosing(false);  // Reset closing state when modal opens
//   }, [event]);

//   if (!event) return null;

//   return (
//     <div className="modal-backdrop" onClick={handleClose}>
//       <div
//         className={`modal-content ${isClosing ? 'fade-out' : 'fade-in'}`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button className="close-btn" onClick={handleClose}>X</button>
//         <h2>{event.name}</h2>
//         <p>{event.date} - {event.location}</p>
//         <p>{event.description}</p>
//         <img src={event.image} alt={event.name} />
//       </div>
//     </div>
//   );
// }

// export default EventModal;


// import React, { useEffect, useState } from 'react';
// import './EventModal.css';  // Import modal-specific styles

// function EventModal({ event, onClose }) {
//   const [isClosing, setIsClosing] = useState(false);

//   const handleClose = () => {
//     setIsClosing(true);  // Trigger fade-out effect
//     setTimeout(onClose, 300);  // Wait for animation before closing
//   };

//   useEffect(() => {
//     setIsClosing(false);  // Reset closing state when modal opens
//   }, [event]);

//   if (!event) return null;

//   return (
//     <div className="modal-backdrop" onClick={handleClose}>
//       <div
//         className={`modal-content ${isClosing ? 'fade-out' : 'fade-in'}`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button className="close-btn" onClick={handleClose}>X</button>
//         <h2>{event.name}</h2>
//         <p>{event.date} - {event.location}</p>
//         <p>{event.description}</p>
//         <img src={event.image} alt={event.name} />
//       </div>
//     </div>
//   );
// }

// export default EventModal;

// EventModal.js
import React, { useEffect, useState } from 'react';
import './EventModal.css';

function EventModal({ event, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);  // Trigger fade-out effect
    setTimeout(onClose, 300);  // Wait for animation before closing
  };

  useEffect(() => {
    setIsClosing(false);  // Reset closing state when modal opens
  }, [event]);

  if (!event) return null;

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div
        className={`modal-content ${isClosing ? 'fade-out' : 'fade-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={handleClose}>X</button>
        <h2 className='cardheading'>{event.name}</h2>
        <p className='bgcolor'>{event.date} - {event.location}</p>
        <img src={event.image} alt={event.name} className="modal-image" />
        <p className='description'>{event.description}</p>
      </div>
    </div>
  );
}

export default EventModal;

