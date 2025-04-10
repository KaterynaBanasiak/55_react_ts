import { useState } from "react"
import BlogManagement from "./components/BlogManagement/BlogManagement"
import { BlogContext } from "./context"

function Homework18() {
  const [post, setPost] = useState('')

  return (
    <BlogContext.Provider value={{ post, setPost }}>
      <BlogManagement />
    </BlogContext.Provider>
  )
}

export default Homework18
