import { useRef } from 'react';

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <nav>
        <button onClick={() => inputRef.current?.focus()}>Search</button>
      </nav>
      <input placeholder="Looking for something?" ref={inputRef} />
    </div>
  );
}
