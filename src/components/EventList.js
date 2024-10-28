import React, { useState, useEffect } from 'react';
import events from '../data/events.json';
import EventCard from './EventCard';
import EventModal from './EventModal';
import './EventList.css';
// import { FaSearch } from 'react-icons/fa'; // Font Awesome icon for search

function EventList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="spinner"></div>;
  }

  return (
    <div className="event-list">
      <div className="searchbar">
        {/* <FaSearch className="search-icon" /> */}
        <input
          className="search"
          type="text"
          placeholder="Search events..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="event-grid">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
        ))}
      </div>
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

export default EventList;
