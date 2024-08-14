import { useEffect, useState } from "react"
import { GameManager } from "./game"

function App() {
  const [currentPage, setCurrentPage] = useState<JSX.Element>(<></>)

  const updateCurrentPage = (reactElement: JSX.Element) => {
    setCurrentPage(reactElement)
  }
  
  useEffect(() => {
    GameManager.getInstance(updateCurrentPage)
  }, [])


  return (
    <div className="stage-container">
      {currentPage}
    </div>
  )
}

export default App
