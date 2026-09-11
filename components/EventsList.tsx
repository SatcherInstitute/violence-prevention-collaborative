"use client";

import { events } from "@/app/data/events";
import EventCard from "./EventCard";

export default function EventsList() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = events
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  const past = events
    .filter((e) => new Date(e.date) < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="events-section">
      {upcoming.length > 0 && (
        <div className="events-group">
          <h3 className="events-group-label">Upcoming</h3>
          {upcoming.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      )}
      {past.length > 0 && (
        <div className="events-group">
          <h3 className="events-group-label">Past Events</h3>
          {past.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      )}
    </div>
  );
}
