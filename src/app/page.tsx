import Feed from "src/components/feed";

const HomePage: React.FC = () => {
  return (
    <>
      <main>   
        <div className="p-4 min-h-screen">
          <Feed />
        </div>
      </main>
    </>
  );
};

export default HomePage;
