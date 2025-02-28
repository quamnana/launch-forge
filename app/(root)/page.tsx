import { title } from "process";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Nana" },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFJfGVufDB8fDB8fHww",
      category: "Artificial Intelligence",
      title: "Frisk",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Where Ideas Ignite, <br /> and Startups Take Flight.
        </h1>
        <p className="sub-heading !max-w-3xl">
          Your Startup, Our Ecosystem – Let’s Build the Next Big Thing.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
