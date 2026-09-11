"use client";

import { useState } from "react";
import type { VPCEvent } from "@/app/data/events";

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return {
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    day: String(day),
    weekday: d.toLocaleString("en-US", { weekday: "short" }).toUpperCase(),
    full: d.toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" }),
  };
}

export default function EventCard({ event }: { event: VPCEvent }) {
  const [open, setOpen] = useState(false);
  const date = formatDate(event.date);
  const hasDetails =
    (event.sections && event.sections.length > 0) ||
    (event.quotes && event.quotes.length > 0) ||
    event.image;

  return (
    <div className={`event-card${open ? " event-card--open" : ""}`}>
      <button
        className="event-card-header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className="event-card-date">
          <span className="event-date-month">{date.month}</span>
          <span className="event-date-day">{date.day}</span>
          <span className="event-date-weekday">{date.weekday}</span>
        </div>
        <div className="event-card-meta">
          <span className="event-card-title">{event.title}</span>
          <span className="event-card-location">
            {event.location ? `${event.location} · ` : ""}
            {date.full}
          </span>
          <span className="event-card-summary">{event.summary}</span>
        </div>
        {hasDetails && (
          <span className="event-card-toggle" aria-hidden>
            {open ? "−" : "+"}
          </span>
        )}
      </button>

      {open && hasDetails && (
        <div className="event-card-body">
          {event.image && (
            <img
              src={event.image.src}
              srcSet={event.image.srcSet}
              sizes={event.image.sizes}
              alt={event.image.alt}
              loading="lazy"
              className="event-card-image"
            />
          )}
          {event.sections?.map((section) => (
            <div key={section.heading} className="event-section">
              <h4 className="event-section-heading">{section.heading}</h4>
              {section.body && <p className="event-section-body">{section.body}</p>}
              {section.bullets && (
                <ul className="event-section-bullets">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {event.quotes?.map((q) => (
            <blockquote key={q.attribution} className="event-quote">
              <p>{q.text}</p>
              <cite>— {q.attribution}</cite>
            </blockquote>
          ))}
        </div>
      )}
    </div>
  );
}
