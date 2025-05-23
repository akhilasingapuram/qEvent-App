"use client";

import { useRouter } from "next/navigation";

const ArtistCard = ({ artist }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/events?artist=${encodeURIComponent(artist?.name)}`);
  };

  return (
    <div className="hover-inverse group w-[20%] min-w-[300px]  h-fit flex text-center justify-center transform transition-transform duration-400 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark m-4 border-slate-400 border rounded-md px-8 py-2.5">
      <div>
        <img
          className="w-24 h-24 mb-3 group-hover:filter-none rounded-full shadow-lg m-auto"
          src={artist?.image}
          alt={`${artist?.name} image`}
        />
        <p>{artist?.location}</p>
        <h2 className="text-2xl font-bold">{artist?.name}</h2>
        <p>{artist?.description}</p>
        <div className="flex justify-between items-center mt-10">
          <h3 className="text-2xl">{artist?.artist}</h3>
        </div>
        <button
          onClick={handleClick}
          className=" bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
        >
          View Events
        </button>
      </div>
    </div>
  );
};

export default ArtistCard;
