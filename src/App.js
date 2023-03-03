import "./styles.css";
import { g } from "./dfs";
import ForceGraph2D from "react-force-graph-2d";
export default function App() {
  function genRandomTree(N = 1000, reverse = false) {
    return {
      nodes: [...Array(N).keys()].map((i) => ({ id: i })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          [reverse ? "target" : "source"]: id,
          [reverse ? "source" : "target"]: Math.floor(Math.random() * (id - 1))
        }))
    };
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ForceGraph2D
        graphData={genRandomTree(1000)}
        nodeLabel="id"
        nodeRelSize={6}
        linkDirectionalArrowLength={7}
        linkDirectionalArrowRelPos={1}
        nodeCanvasObjectMode={() => "after"}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
          const fontSize = 14 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "black"; //node.color;
          ctx.beginPath();
          // ctx.arc(x, y, Math.max(fontSize / 1.4 + id), 0, 2 * Math.PI, false);
          ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI, false);
          ctx.fill();
          ctx.fillText(label, node.x, node.y, 10);
        }}
        // linkCurvature={0.25}
      />
    </div>
  );
}
