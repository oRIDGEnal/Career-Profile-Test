import LeftBlock from "./components/LeftBlock";
import RightBlock from "./components/RightBlock";

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <LeftBlock />
        <RightBlock />
      </div>
    </div>
  );
};

export default App;
