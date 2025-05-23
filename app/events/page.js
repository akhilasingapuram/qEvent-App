"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");
  const artist = searchParams.get("artist");

  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("https://qevent-backend.labs.crio.do/events");
      const data = await res.json();

      setEvents(data);

      let filtered = data;

      if (artist) {
        filtered = filtered.filter(
          (event) => event.artist?.toLowerCase() === artist.toLowerCase()
        );
      }

      if (tag) {
        filtered = filtered.filter(
          (event) =>
            Array.isArray(event.tags) &&
            event.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
        );
      }

      setFilteredEvents(filtered);
    };

    fetchEvents();
  }, [artist, tag]);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
