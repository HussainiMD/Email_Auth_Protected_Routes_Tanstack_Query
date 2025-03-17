import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export const getValiditityHint = (field, test) => {
    if(field.trim().length == 0 || test === undefined) return '';
    if(test) return <FontAwesomeIcon icon={faCheck} style={{color: "#63E6BE",}} />
    else return <FontAwesomeIcon icon={faXmark} style={{color: "red"}} />
}

export const showHintText = (field, test) => {
    if(field.trim().length > 0 && !test) return true;
    return false;
}

export const isUserNamevalid = (userName) => userName.trim().length > 5;
export const isUserPwdValid = (userPwd) => userPwd.trim().length > 6;