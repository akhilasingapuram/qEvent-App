import React from "react";
import Tag from "../../../components/Tag";
export default async function EventDetailPage({ params }) {
  const { eventId } = params;

  const res = await fetch(
    `https://qevent-backend.labs.crio.do/events/${eventId}`
  );
  if (!res.ok) {
    return <p className="p-4 text-red-600">Failed to load event.</p>;
  }
  const event = await res.json();
  console.log("Event Detail", event);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-3xl font-bold">{event.name}</h1>
      <div className="space-y-2">
        <p>
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>
          <strong>Artist:</strong> {event.artist}
        </p>
      </div>
      <div className="flex gap-2 items-center">
        {event.tags.map((tag) => (
          <Tag tag={tag} />
        ))}
      </div>
      <p className="text-gray-700">{event.description}</p>
      <div className="flex gap-4 justify-between">
        <p>
          <strong>$</strong> {event.price}
        </p>
        <button
          type="button"
          className="text-white bg-red-500 px-4 py-2 rounded"
        >
          Buy Tickets
        </button>
      </div>
    </div>
  );
}
