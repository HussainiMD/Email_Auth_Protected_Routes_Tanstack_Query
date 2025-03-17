
let loggedInUser = null;

const getUser = () =>  loggedInUser;    

const setUser = (user) => {        
    Object.freeze(user);
    loggedInUser = user;        
}

export const AuthStore =  {getUser, setUser};

