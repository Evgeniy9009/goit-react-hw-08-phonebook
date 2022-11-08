import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { current } from 'redux/auth/auth-operations';
import { getLoadingUserStatus } from 'redux/auth/auth-selectors';
import Navbar from "./components/Navbar/Navbar";
import UserRoutes from "./UserRoutes";

function App () {
  const dispatch = useDispatch()

  const isLoadindUser = useSelector(getLoadingUserStatus)

  useEffect(() => {
    dispatch(current())
  }, [dispatch])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#010101'
      }}
    >
      {isLoadindUser ? <p>Loading...</p> : (
        <>
          <Navbar />
          <UserRoutes/>
        </>
      )}
      
    </div>
  );
};

export default App