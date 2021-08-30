import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Service from "../../model/Service";
import ServiceItem, { createServiceItemObject } from "../../model/ServiceItem";
import { ServiceType } from "../../model/ServiceType";
import { ServicesAvailableAction } from "../actions/ServiceAction";
import { ApplicationStore } from "../reducers";

export const parseServiceFromFileThunk = (serviceContent: string) => (dispatch: ThunkDispatch<ApplicationStore, null, AnyAction>, getState: () => ApplicationStore) => {
    const lines = serviceContent.split("\n").map(line => line.replaceAll("\r", ""));
    //3|g_mmi|steuern_servicehistory_add||18;1;2021;0;173890;0;00081;0x1;6;1;0x1;0;0;12;0x1;0;0;5;0x1;0;0;4;0x1;0;0;100;0x1;0;0;11;0x1;0;0

    console.log(lines);
    // manage the first line
    let index = 1;
    let services: Service[] = [];
    for (; index < lines.length; index++) {
        const service = getServiceFromALine(lines[index]);
        service && services.push(service);
    }
    dispatch(ServicesAvailableAction(services));
};

const getServiceFromALine = (line: string): Service | null => {
    const parts = line.split("|");
    if (parts.length <= 4) {
        return null;
    }
    const servicePart = parts[4].split(";");
    if (servicePart.length < 8) {
        return null;
    }
    return {
        date: new Date(parseInt(servicePart[2]), parseInt(servicePart[1]) - 1, parseInt(servicePart[0])),
        mileage: parseInt(servicePart[4]),
        dealer: servicePart[6],
        bmw: servicePart[5] === '1',
        status: '0x1',  // TODO: support status type
        items: getServiceItemsFromAnArray(servicePart.filter((_, i) => i > 7)),
    };
};

const getServiceItemsFromAnArray = (array: string[]): ServiceItem[] => {
    if (!array.length) {
        return [];
    }
    const size = parseInt(array[0]);
    if (size * 4 + 1 !== array.length) {
        return [];
    }
    const itemsArray = array.slice(1);
    const items: ServiceItem[] = [];
    for (let index = 0; index < itemsArray.length; ) {
        items.push({
            ...createServiceItemObject(),
            serviceType: itemsArray[index] as ServiceType,
        });
        index += 4;
    }
    return items;
};
