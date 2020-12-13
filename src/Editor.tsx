import React, { useState, useEffect } from 'react';

import { Table, EditUser } from './containers';
import Code from './Code';
import { URL, INITIALSTATE } from './constant';
import { useFetch } from './hooks';
import './Editor.css';

function Editor() {
  const { response, error } = useFetch(URL);

  if (error) {
    console.log(error);
  }

  const [users, setUsers] = useState<any>(null);
  const [isEdit, setEdit] = useState(false);
  const [target, setTarget] = useState<any>(INITIALSTATE);

  useEffect(() => {
    setUsers(response);
  }, [response]);

  const deleteUser = (id: string) => {
    setUsers(users.filter((user: any) => user.id !== id));
  };

  const editUser = (user: any) => {
    setEdit(true);
    setTarget(user);
  };

  const updateUser = (updated: any) => {
    setUsers(
      users.map((user: any) => (user.id === target.id ? updated : user)),
    );
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

      <Code users={users} />
    </>
  );
}

export default Editor;
