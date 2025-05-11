import { useState } from 'react';

export default function EditProfile() {
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsEditing(prev => !prev);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>
      <div>
        <label>
          First name:
          {isEditing ? (
            <input value={firstName} onChange={event => setFirstName(event.target.value)} />
          ) : (
            <b>{firstName}</b>
          )}
        </label>
      </div>
      <div>
        <label>
          Last name:
          {isEditing ? (
            <input value={lastName} onChange={event => setLastName(event.target.value)} />
          ) : (
            <b>{lastName}</b>
          )}
        </label>
      </div>
      <button type="submit">{isEditing ? 'Save Profile' : 'Edit Profile'}</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
