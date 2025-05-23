import Tag from "@/components/Tag";

export default async function TagsPage() {
  const res = await fetch("https://qevent-backend.labs.crio.do/tags");
  const tags = await res.json();
  //console.log(tags);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag.name} />
      ))}
      <h1>Tags Page</h1>
    </div>
  );
}
