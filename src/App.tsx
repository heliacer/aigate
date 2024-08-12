import { useEffect, useState } from "react";
import { GameManager } from "./game"

function App() {
  const [currentPage, setCurrentPage] = useState(<></>);

  useEffect(() => {
    GameManager.getInstance(setCurrentPage);
  }, []);
  return (
    <>
      {currentPage}
    </>
  )
}

export default App
