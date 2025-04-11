import { createContext } from 'react';

interface BlogContextProps {
  postMessage: string;
  setPostMessage: (msg: string) => void;
}

export const BlogContext = createContext<BlogContextProps>({
  postMessage: '',
  setPostMessage: () => {},
});
