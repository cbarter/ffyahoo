import {useState} from "react";
import useApiContext from "../hooks/useApiContext";


function OAuthBox() {
    const [loginIsDisabled, setLoginIsDisabled] = useState(false);
    const { getLogin, getAccessCode } = useApiContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginIsDisabled(true);
        // const result = await getAccessCode();
        // document.location = await result;
        const result = await getLogin();
        console.log(await result);
    }

    return (
        <div>
            <div>
                <button disabled={loginIsDisabled} onClick={handleSubmit}>Login With Yahoo</button>
            </div>
        </div>
    );
}

export default OAuthBox;

