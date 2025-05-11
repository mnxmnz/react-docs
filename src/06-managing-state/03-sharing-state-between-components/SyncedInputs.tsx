import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <Input label="First input" value={text} onChange={handleChange} />
      <Input label="Second input" value={text} onChange={handleChange} />
    </>
  );
}

interface InputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, value, onChange }: InputProps) {
  return (
    <div>
      <label>
        {label} <input value={value} onChange={onChange} />
      </label>
    </div>
  );
}
