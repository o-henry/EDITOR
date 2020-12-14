import { TProfile, TBookReviews } from './types';

function Depth({ users }: any) {
  return (
    <div>
      {users &&
        users.map((user: TProfile) => {
          return (
            <div key={user.id}>
              <pre>
                {`
                    {
                      id:  ${user.id} ,
                      name: ${user.name} ,
                      age: ${user.age},
                      contacts: {
                        email: ${user.contacts.email},
                        phone: ${user.contacts.phone},
                      },
                      isMember: ${user.isMember},
                      experiencedSeasons: ${user.experiencedSeasons},
                      createdAt: ${user.createdAt},
                      ${user.bookReviews.map(
                        (book: TBookReviews) =>
                          `
                         bookReviews: [{
                        bookTitle: ${book.bookTitle},
                        title: ${book.title},
                        content: ${book.content} 
                      }]
                      `,
                      )}
                   
                    }
                  `}
              </pre>
            </div>
          );
        })}
    </div>
  );
}

export default Depth;
