import { useState } from 'react';

export default function Input() {
  const [reverse, setReverse] = useState(false);

  return (
    <>
      {reverse ? <Field key="last" label="Last name" /> : <Field key="first" label="First name" />}
      {reverse ? <Field key="first" label="First name" /> : <Field key="last" label="Last name" />}
      <Checkbox label="Reverse order" reverse={reverse} setReverse={setReverse} />
    </>
  );
}

interface FieldProps {
  label: string;
}

function Field({ label }: FieldProps) {
  const [text, setText] = useState('');

  return (
    <label>
      {label}: <input type="text" value={text} placeholder={label} onChange={e => setText(e.target.value)} />
    </label>
  );
}

interface CheckboxProps {
  label: string;
  reverse: boolean;
  setReverse: (reverse: boolean) => void;
}

function Checkbox({ label, reverse, setReverse }: CheckboxProps) {
  return (
    <label>
      {label}: <input type="checkbox" checked={reverse} onChange={e => setReverse(e.target.checked)} />
    </label>
  );
}
