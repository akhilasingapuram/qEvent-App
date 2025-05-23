"use client";

import Tag from "./Tag";
import Link from "next/link";

const EventCard = ({ event }) => {
  // console.log("Event", event);
  return (
    <div className="hover-inverse w-[60%] h-fit group transform transition-transform duration-400 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark m-4 border-slate-400 border rounded-md px-8 py-2.5">
      <Link
        href={`/events/${event?.id}`}
        className="rounded-md text-dark flex-shrink-0 scroll-snap-card p-4"
      >
        <div>
          {event?.image && (
            <img
              className="w-full  mb-3 group-hover:filter-none shadow-lg m-auto "
              src={event.image}
              alt="Bonnie image"
            />
          )}

          <div className="flex gap-2 items-center">
            {typeof event?.tags === "Array" &&
              event.tags.map((tag) => <Tag text={tag} key={tag} />)}
          </div>
          <p className="mt-5 mb-10">
            {new Date(event?.date).toDateString()} | {event?.time}
          </p>
          <p>{event?.location}</p>
          <h2 className="text-2xl font-bold">{event?.name}</h2>
          <div className="flex justify-between items-center mt-10">
            <h3 className="text-2xl">{event?.artist}</h3>
            <h3 className="text-2xl">
              {" "}
              {event?.price > 0 ? `$ ${event.price.toLocaleString()}` : "FREE"}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
