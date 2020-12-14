import { TProfile, TBookReviews } from '../types';

interface Props {
  users: TProfile[];
  deleteUser: (id: string) => void;
  editUser: (user: TProfile) => void;
}

function Table({ users, ...props }: Props) {
  const { editUser } = props;

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
              <th>책 리뷰</th>
              <th>수정</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map(user => {
                const { id, age, name, contacts } = user;

                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{contacts.email}</td>
                    <td>{contacts.phone}</td>
                    <td>
                      {user.bookReviews.map(
                        (book: TBookReviews, idx: number) => (
                          <div key={idx}>{book.bookTitle}</div>
                        ),
                      )}
                    </td>
                    <td>
                      <button onClick={() => editUser(user)}>수정</button>
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
