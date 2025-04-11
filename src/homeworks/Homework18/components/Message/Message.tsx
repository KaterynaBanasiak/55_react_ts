import { useContext } from 'react';
import { BlogContext } from '../../components/BlogContext';
import Button from "../../../../components/Button/button";
import styled from '@emotion/styled';

const MessageText = styled.p`
  margin: 10px 0;
  font-size: 16px;
`;

function Message() {
  const { postMessage, setPostMessage } = useContext(BlogContext);

  const handleDelete = () => {
    setPostMessage('');
  };

  if (!postMessage) return null;

  return (
    <>
      <MessageText>{postMessage}</MessageText>
      <Button name="Delete Post" onClick={handleDelete} danger />
    </>
  );
}

export default Message;

