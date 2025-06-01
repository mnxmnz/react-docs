import { useState } from 'react';

import Input from './Input';

export default function Form() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('Taylor');
  const [upper, setUpper] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(s => !s)}>form {show ? '숨기기' : '보기'}</button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            이름을 입력하세요:
            <Input value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            <input type="checkbox" checked={upper} onChange={e => setUpper(e.target.checked)} />
            대문자로 만들기
          </label>
          <p>
            안녕하세요, <b>{upper ? name.toUpperCase() : name}님</b>
          </p>
        </>
      )}
    </div>
  );
}
