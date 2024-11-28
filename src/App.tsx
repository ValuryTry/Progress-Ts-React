import ListGroup from "./components/ListGroup";
function App() {
  let items = ["NEW york ", "Paris", "Tokyo", "London", "Rabat"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
