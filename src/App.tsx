import { Card } from "./components/Card/Card.tsx";
import styles from "./App.module.css";

function App() {
  const { container } = styles;
  return (
    <>
      <div className={container}>
        <Card />
      </div>
    </>
  );
}

export default App;
