import React, { useState, useEffect } from 'react';

import Depth from './Depth';
import { Table, EditUser } from './containers';
import { URL, INITIALSTATE } from './constant';
import { useFetch } from './hooks';
import { TProfile } from './types';
import './Editor.css';

function Editor() {
  const { response, error } = useFetch(URL);

  if (error) {
    console.log(error);
  }

  const [users, setUsers] = useState<TProfile[]>([]);
  const [isEdit, setEdit] = useState(false);
  const [target, setTarget] = useState<any>(INITIALSTATE);

  useEffect(() => {
    setUsers(response);
  }, [response]);

  const deleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editUser = (user: TProfile) => {
    setEdit(true);
    setTarget(user);
  };

  const updateUser = (newUser: TProfile) => {
    setUsers(users.map(user => (user.id === target.id ? newUser : user)));
    setTarget(INITIALSTATE);
    setEdit(false);
  };

  return (
    <>
      <div className="Editor">
        <div>
          <Table users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>

        <div className="Edit">
          {isEdit && (
            <EditUser
              target={target}
              setEdit={setEdit}
              updateUser={updateUser}
            />
          )}
        </div>
      </div>

      <Depth users={users} />
    </>
  );
}

export default Editor;
