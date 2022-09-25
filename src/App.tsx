
export interface IProps {
  v: string;
}

function App() {
  const props: IProps = { v: "This works" }

  return (
    <div className="App">
      <header className="App-header">
        <p>{props.v}</p>
      </header>
    </div>
  );
}

export default App
