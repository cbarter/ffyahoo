import {useContext} from "react";
import ApiContext from "../context/ApiContext";

function useApiContext() {
    return useContext(ApiContext);
}

export default useApiContext;
