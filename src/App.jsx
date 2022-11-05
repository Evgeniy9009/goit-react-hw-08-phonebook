import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import UserRoutes from "./UserRoutes";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#010101'
      }}
    >
      <Navbar />
      <UserRoutes/>
    </div>
  );
};
