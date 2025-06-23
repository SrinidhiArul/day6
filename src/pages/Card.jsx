import App from "../App.jsx";

function Card(props) {
  let item = props.item;
  console.log(item);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        borderRadius: "8px",
        margin: "10px",
        backgroundColor: "#f0f0f0",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p>{item.name}</p>
      <p>{item.exp} exp in {item.domain}</p>
    </div>
  );
}

export default Card;
