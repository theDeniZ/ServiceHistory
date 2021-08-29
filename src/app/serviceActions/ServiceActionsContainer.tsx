import { FC } from "react";
import CreateServiceContianer from "./createService/CreateServiceContianer";
import ServiceUploadContainer from "./loadService/ServiceUploadContainer";

const ServiceActionsContainer: FC = () => {
    return (
        <> 
            <ServiceUploadContainer />
            <CreateServiceContianer />
        </>
    );
}
 
export default ServiceActionsContainer;