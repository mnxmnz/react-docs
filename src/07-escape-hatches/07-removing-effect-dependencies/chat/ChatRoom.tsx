import { useEffect } from 'react';
import { createConnection } from './chat.js';

interface ChatRoomProps {
  serverUrl: string;
  roomId: string;
}

export default function ChatRoom({ serverUrl, roomId }: ChatRoomProps) {
  useEffect(() => {
    const connection = createConnection({
      roomId: roomId,
      serverUrl: serverUrl,
    });

    connection.connect();

    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
