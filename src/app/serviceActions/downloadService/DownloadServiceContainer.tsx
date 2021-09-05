import { FC } from "react";
import { useDispatch } from "react-redux";
import { saveToFileThunk } from "../../../redux/thunks/FileThunk";
import DownloadService from "./DownloadService";
 
const DownloadServiceContainer: FC = () => {
    const dispatch = useDispatch();

    const onDowloadAction = () => {
        dispatch(saveToFileThunk());
    };

    return ( 
        <>
            <DownloadService onDowloadClick={onDowloadAction}/>
        </>
     );
}
 
export default DownloadServiceContainer;