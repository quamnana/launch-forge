import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

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
    </>
  );
}
