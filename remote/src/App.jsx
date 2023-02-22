import React from 'react';

function App({ auth }) {
  return (
    <>

      <div style={{
        border: "2px green solid",
        height: '200px',
        textAlign: 'center'
      }}>
        <p>Auth: {auth}</p>
        This is the Remote React App</div>
    </>
  );
}

export default App;
