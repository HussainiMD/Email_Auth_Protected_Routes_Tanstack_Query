import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { getValiditityHint, showHintText, isUserPwdValid } from "../../utils/helper";


export const PasswordInput = ({userPwd, setUserPwd}) => {
  const isPwdValid = isUserPwdValid(userPwd);  

  return (  
    <label htmlFor="user-pwd">
        <span className="block">Password: {getValiditityHint(userPwd, isPwdValid)}</span>
        <input type="password" className="" id="user-pwd" value={userPwd} onChange={e => setUserPwd(e.target.value)}/>
        {showHintText(userPwd, isPwdValid) ? 
            (   <span className="block info-area" style={{backgroundColor:"black"}}>
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <p className="block">A password has to be at least 7 character. Try to make it complex with combination of  alphabets and numbers</p>
                </span>
            )
        : <></>
        }
    </label>
  )
}