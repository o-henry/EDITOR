import React from 'react';

function Code({ users }: any) {
  console.log(users);
  return (
    <div>
      {users &&
        users.map((user: any) => {
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
                      bookReviews: [{
                        bookTitle: ${user.bookTitle},
                        title: ${user.title},
                        content: ${user.content} 
                      }]
                    }
                  `}
              </pre>
            </div>
          );
        })}
    </div>
  );
}

export default Code;
