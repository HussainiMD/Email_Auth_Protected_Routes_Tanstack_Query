import { useState } from "react";
import { UserNameInput } from "./partials/UserNameInput";
import { PasswordInput } from "./partials/PasswordInput";
import { isUserNamevalid, isUserPwdValid } from "../utils/helper";
import { useSignInUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import { AuthStore } from "../state/AuthStore";

export const SignInForm = () => { 
 const [userName, setUserName] = useState("");
 const [userPwd, setUserPwd] = useState("");    
 const [userMsg, setUsrMsg] = useState("");
 
 const isNameValid = isUserNamevalid(userName);
 const isPwdValid = isUserPwdValid(userPwd);

 const navigate = useNavigate();

 const formHandler = async (e) => {
    e.preventDefault();
    
    if(!isNameValid || !isPwdValid) {
        setUsrMsg('Both user name are requried and they have to be valid');
        return;
    }
    try {
        const {access_token, expires_in} = await useSignInUser(userName, userPwd);
        AuthStore.setUser({access_token, expires_in});        
        setUserName("");
        setUserPwd("");    
        setUsrMsg("");
        navigate('/user/posts');
    } catch(err) {
        alert('unable to sign in the user');
        console.warn(err);
    }
 }

 return (   
    <form className="flex flex-y flex-center gap-2 form" onSubmit={formHandler}>
        <p className={userMsg.length > 0 ? "usr-msg" : ""}>{userMsg}</p>
        <header className="flex-start">Sign In</header>
        <UserNameInput userName={userName} setUserName={setUserName}/>
        <PasswordInput userPwd={userPwd} setUserPwd={setUserPwd} />                
        <button className="btn btn-x-size flex-start" disabled={!isNameValid || !isPwdValid}>Sign In</button>
        <div className="flex-start">
            <p>New User?</p>
            <a href="/signup">Sign Up</a>
        </div>
     </form>
 )
}