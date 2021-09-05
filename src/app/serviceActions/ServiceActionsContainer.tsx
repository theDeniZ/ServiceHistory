import { FC } from "react";
import CreateServiceContianer from "./createService/CreateServiceContianer";
import DownloadServiceContainer from "./downloadService/DownloadServiceContainer";
import ServiceUploadContainer from "./loadService/ServiceUploadContainer";

const ServiceActionsContainer: FC = () => {
    return (
        <> 
            <ServiceUploadContainer />
            <CreateServiceContianer />
            <DownloadServiceContainer />
        </>
    );
}
 
export default ServiceActionsContainer;