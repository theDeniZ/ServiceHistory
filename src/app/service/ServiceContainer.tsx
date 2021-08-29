import { FunctionComponent } from "react";
import ServiceListContainer from "./list/ServiceListContainer";
import CreateServiceContianer from "./createService/CreateServiceContianer";

const ServiceContainer: FunctionComponent = () => {

    return (
        <>
            <CreateServiceContianer />
            <ServiceListContainer />
        </>
    );
}

export default ServiceContainer;