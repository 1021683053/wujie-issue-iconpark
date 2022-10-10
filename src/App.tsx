import WujieReact from "wujie-react";

function App() {

  return (
    <div className="App">
      Wujie Main
      <div style={{ width: 800, height: 800, border: '1px solid #333' }}>
        <WujieReact
          width="100%"
          height="100%"
          name="xxx"
          url='/src/WujieReactChildren/index.html'
          sync={true}
          fetch={fetch}
        ></WujieReact>
      </div>
    </div>
  )
}

export default App
