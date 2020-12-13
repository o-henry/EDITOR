import { TProfile } from '../types';

interface Props {
  users: TProfile[];
  deleteUser: (id: string) => void;
  editUser: (user: TProfile) => void;
}

function Table({ users, ...props }: Props) {
  const { deleteUser, editUser } = props;

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>나이</th>
              <th>이메일</th>
              <th>번호</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user: TProfile) => {
                const { id, age, name, contacts } = user;

                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{contacts.email}</td>
                    <td>{contacts.phone}</td>
                    <td>
                      <button onClick={() => editUser(user)}>수정</button>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(id)}>삭제</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
