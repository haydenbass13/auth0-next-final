import React from 'react';

function App({ user }) {
  return (
    <>

      <div style={{
        border: "2px green solid",
        height: '200px',
        textAlign: 'center'
      }}>
        <h1>This is the Remote React App</h1>
        <h2>Authorized as {user?.given_name} | {user?.email}</h2>
      </div>
    </>
  );
}

export default App;
