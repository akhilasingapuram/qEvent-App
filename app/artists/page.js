import ArtistCard from "@/components/ArtistCard";

export default async function ArtistsPage() {
  const res = await fetch("https://qevent-backend.labs.crio.do/artists");
  const artists = await res.json();
  //console.log(artists);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
      <h1>Artists Page</h1>
    </div>
  );
}
