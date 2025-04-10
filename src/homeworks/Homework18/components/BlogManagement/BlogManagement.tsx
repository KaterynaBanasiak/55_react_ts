import { useState, useContext } from "react"
import { BlogContext } from "../../context"
import Card from "../Card/Card"

function BlogManagement() {
  const [inputValue, setInputValue] = useState("")
  const { setPost } = useContext(BlogContext)

  const handlePost = () => {
    setPost(inputValue)
    setInputValue("")
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Write your message..."
      />
      <button onClick={handlePost}>Post</button>
      <Card />
    </div>
  )
}

export default BlogManagement
