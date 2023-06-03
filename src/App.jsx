import HighlightandZoomLight from "./Components/HighlightandZoomLight"
import PiechartwithAngel from "./Components/PiechartwithAngel"
import SimpleLineChart from "./Components/SimpleLineChart"
import SimpleRadarChart from "./Components/SimpleRadarChart"
import VerticalLinechart from "./Components/VerticalLinechart"
import ComposedresPonsivecontainer from "./ComposedresPonsivecontainer"

function App() {

  return (
    <>
    <div className="mb-20">
    <h1 className="text-orange-500">hi</h1>
    </div>
      <div className="lg:flex">
        <SimpleLineChart></SimpleLineChart>
        <VerticalLinechart></VerticalLinechart>
      </div>
      <div className="lg:flex">
        <HighlightandZoomLight></HighlightandZoomLight>
        <PiechartwithAngel></PiechartwithAngel>
      </div>
      <div className="lg:flex">
        <ComposedresPonsivecontainer></ComposedresPonsivecontainer>
        <SimpleRadarChart></SimpleRadarChart>
      </div>
    </>
  )
}

export default App
