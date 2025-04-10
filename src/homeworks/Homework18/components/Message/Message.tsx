import { useContext } from "react"
import { BlogContext } from "../../context"

function Message() {
  const { post, setPost } = useContext(BlogContext)

  if (!post) return null

  return (
    <div style={{ marginTop: "10px" }}>
      <div>{post}</div>
      <button onClick={() => setPost("")}>Delete Post</button>
    </div>
  )
}

export default Message
