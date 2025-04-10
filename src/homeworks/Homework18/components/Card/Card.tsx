import Message from "../Message/Message"

function Card() {
  return (
    <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
      <div><strong>Ivan Ivanov</strong></div>
      <Message />
    </div>
  )
}

export default Card
