import React, { useState, useEffect } from 'react';

import { Input } from '../components';
import { TProfile, TBookReviews } from '../types';

interface Props {
  setEdit: any;
  target: TProfile;
  updateUser: (user: TProfile) => void;
}

function EditUser(props: Props) {
  const { target, setEdit, updateUser } = props;
  const [user, setUser] = useState(target);

  useEffect(() => {
    setUser(target);
  }, [props]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    name === 'email' || name === 'phone'
      ? setUser({ ...user, contacts: { ...user.contacts, [name]: value } })
      : setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateUser(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          pattern="[가-힣a-zA-Z]+"
          label="이름"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
      </div>

      <div>
        <Input
          label="나이"
          pattern="[0-9]{1,2}"
          value={user.age}
          name="age"
          onChange={handleChange}
        />
      </div>

      <div>
        <Input
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          label="이메일"
          defaultValue={user.contacts.email}
          name="email"
          onChange={handleChange}
        />
      </div>

      <div>
        <Input
          label="번호"
          pattern="[0-9]{11}"
          defaultValue={user.contacts.phone}
          name="phone"
          onChange={handleChange}
        />
      </div>

      <div>
        {user.bookReviews?.map((book: TBookReviews, idx: number) => (
          <div key={idx}>
            <Input
              label="책 제목"
              value={book.bookTitle}
              name="bookTitle"
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <button type="submit">수정</button>
      <button type="submit" onClick={() => setEdit(false)}>
        취소
      </button>
    </form>
  );
}

export default EditUser;
