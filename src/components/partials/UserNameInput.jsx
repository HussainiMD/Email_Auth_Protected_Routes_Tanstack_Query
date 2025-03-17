import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { getValiditityHint, showHintText, isUserNamevalid } from "../../utils/helper";

export const UserNameInput = ({userName, setUserName}) => {
    const isNameValid = isUserNamevalid(userName);
    return (
        <label htmlFor="user-name">    
            <span className="block">UserName: {getValiditityHint(userName, isNameValid)}</span> 
            <input type="text" className="" id="user-name" autoComplete="off" value={userName} onChange={e => setUserName(e.target.value)} autoFocus/>
            {showHintText(userName, isNameValid) ? 
                (   <span className="block info-area" style={{backgroundColor:"black"}}>
                        <FontAwesomeIcon icon={faCircleInfo} />
                        <p className="block">A user name has to be at least 5 character</p>
                    </span>
                )
            : <></>
            }
        </label>
    )

}