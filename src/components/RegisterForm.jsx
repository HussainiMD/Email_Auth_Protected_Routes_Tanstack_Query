import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import {useState, useRef, useEffect} from "react";
import { getValiditityHint, isUserNamevalid, isUserPwdValid } from "../utils/helper";
import { useRegisterUser } from "../api/api";
import { UserNameInput } from "./partials/UserNameInput";
import { PasswordInput } from "./partials/PasswordInput";

export const RegisterForm = () => {
    const [userName, setUserName] = useState("");
    const [userPwd, setUserPwd] = useState("");    
    const [confirmPwd, setConfirmPwd] = useState("");    
    const [userMsg, setUsrMsg] = useState("");

    const isNameValid = isUserNamevalid(userName);
    const isPwdValid = isUserPwdValid(userPwd);

    const formHandler = (e) => {
        e.preventDefault();
        console.log(userName, userPwd);
        if(!isNameValid || !isPwdValid) {
            setUsrMsg('Both user name are requried and they have to be valid');
            return;
        }
        useRegisterUser(userName, userPwd);
        setUserName("");
        setUserPwd("");
        setConfirmPwd("");
        setUsrMsg("");
    }

return (
    <form className="flex flex-y flex-center gap-2 form" onSubmit={formHandler}>
        <p className={userMsg.length > 0 ? "usr-msg" : ""}>{userMsg}</p>
        <header className="flex-start">Register</header>
        <UserNameInput userName={userName} setUserName={setUserName}/>
        <PasswordInput userPwd={userPwd} setUserPwd={setUserPwd} />        
        <label htmlFor="user-confirm-pwd">
            <span className="block">Confirm Password: {getValiditityHint(userPwd, userPwd === confirmPwd)}</span>
            <input type="password" className="" id="user-confirm-pwd" value={confirmPwd} disabled={!isUserPwdValid} onChange={(e) => setConfirmPwd(e.target.value)}/>
        </label>
        <button className="btn btn-x-size flex-start" disabled={!isNameValid || !isPwdValid || userPwd !== confirmPwd}>Sign Up</button>
        <div className="flex-start">
            <p>Already Registered?</p>
            <a href="/signin">Sign In</a>
        </div>
    </form>
)

}