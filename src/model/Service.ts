import ServiceItem, { createServiceItem } from "./ServiceItem";

export default interface Service {
    date: Date;
    mileage: number;
    dealer: string;
    bmw: boolean;
    status: string;
    items: ServiceItem[];
};

export const createService = (): Service => ({
    date: new Date(),
    mileage: 0,
    dealer: "",
    bmw: false,
    status: "",
    items: [],
});

export const addServiceItemToItems = (service: Service): Service => ({
    ...service,
    items: [
        ...service.items,
        createServiceItem(),
    ],
});

export const updateServiceItemAtIndex = (service: Service, serviceItem: ServiceItem, index: number): Service => ({
    ...service,
    items: [
        ...service.items.slice(0, index),
        serviceItem,
        ...service.items.slice(index + 1)
      ]
});

export const deleteServiceItemAtIndex = (service: Service, index: number): Service => ({
    ...service,
    items: [
        ...service.items.slice(0, index),
        ...service.items.slice(index + 1)
    ],
});