import LeftBlock from "./components/LeftBlock";
import RightBlock from "./components/RightBlock";

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-3">
        <LeftBlock />
        <RightBlock />
      </div>
    </div>
  )
}

export default App
