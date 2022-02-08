import React,{useState, createContext, useContext} from 'react';

export const UserContext = createContext();
export const useAuth = () => useContext(UserContext);

export default function AuthContextProvider(props) {
  const [username, setUsername] = useState('');
  return (
    <UserContext.Provider value={{username, setUsername}}>
      {props.children}
    </UserContext.Provider>
  );
}
