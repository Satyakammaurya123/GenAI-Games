import GameCard from "../../components/game/GameCard";

const Home = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-6">

      {/* Hero Section */}
      <section className="mb-14 text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          🎮 GenAI Games
        </h1>

        <p className="mt-5 text-xl text-gray-600">
          Play • Compete • Learn • Have Fun
        </p>

        <p className="mx-auto mt-3 max-w-3xl text-gray-500">
          Discover exciting AI-powered games built using React,
          TypeScript and FastAPI.
        </p>
      </section>

      {/* Section Heading */}
      <section className="mb-8">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Featured Games
        </h2>
      </section>

      {/* Cards */}
      <section className="grid justify-center gap-8 sm:grid-cols-2 xl:grid-cols-3">

        <GameCard
          title="Snake Game"
          emoji="🐍"
          description="Classic snake game with modern gameplay."
          path="/snake"
        />

        <GameCard
          title="Car Racing"
          emoji="🚗"
          description="Race, drift and beat your highest score."
          path="/car-racing"
        />

        <GameCard
          title="Bubble Blast"
          emoji="🫧"
          description="Pop bubbles and enjoy relaxing gameplay."
          path="/bubble-blast"
        />

        <GameCard
          title="Love Game"
          emoji="❤️"
          description="Interactive AI-powered story game."
          path="/love-game"
        />

        <GameCard
          title="Roast Me"
          emoji="😂"
          description="Challenge the AI in a funny roast battle."
          path="/roast-me"
        />

        <GameCard
          title="Donate"
          emoji="💝"
          description="Support the project if you enjoy playing."
          path="/donate"
          buttonText="Support Us"
        />

      </section>

    </div>
  );
};

export default Home;