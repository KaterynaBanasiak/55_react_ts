import { createContext } from "react"

interface BlogContextType {
  post: string
  setPost: (value: string) => void
}

export const BlogContext = createContext<BlogContextType>({
  post: '',
  setPost: () => {},
})
