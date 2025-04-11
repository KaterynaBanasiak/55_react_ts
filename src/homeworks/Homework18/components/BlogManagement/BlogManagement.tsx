import { useState } from 'react';
import { BlogContext } from '../../components/BlogContext';
import Card from '../Card/Card';
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/button";


function BlogManagement() {
  const [inputValue, setInputValue] = useState('');
  const [postMessage, setPostMessage] = useState('');

  const handlePost = () => {
    setPostMessage(inputValue);
  };

  return (
    <BlogContext.Provider value={{ postMessage, setPostMessage }}>
      <div>
        <Input
          placeholder="Write your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          name="blog"
          label="Your message"
          id="blog-input"
        />
        <Button name="Post" onClick={handlePost} />
        <Card />
      </div>
    </BlogContext.Provider>
  );
}

export default BlogManagement;
