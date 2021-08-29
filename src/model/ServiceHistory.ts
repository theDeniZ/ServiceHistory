import Service, { addServiceItemToItems, updateServiceItemAtIndex } from "./Service";
import ServiceItem from "./ServiceItem";

export default interface ServiceHistory {
    history: Service[];
};

export const getServiceAtIndex = (serviceHistory: ServiceHistory, serviceIndex: number): Service | null => {
    return serviceHistory.history.length > serviceIndex ? serviceHistory.history[serviceIndex] : null;
};

export const addServiceToHistory = (service: Service, history: ServiceHistory): ServiceHistory => ({
    history: [...history.history, service],
});

export const addServiceItemToHistory = (history: ServiceHistory, selectedService: number): ServiceHistory => {
    const newService = addServiceItemToItems(history.history[selectedService]);
    return updateServiceAtIndex(history, newService, selectedService);
 
};

export const deleteServiceFromHistory = (serviceIndexToDelete: number, serviceHistory: ServiceHistory) => {
    let history = [...serviceHistory.history];
    history.splice(serviceIndexToDelete, 1);
    return { history };
};

export const updateServiceAtIndex = (serviceHistory: ServiceHistory, newService: Service, serviceIndex: number): ServiceHistory => ({
    history: [
        ...serviceHistory.history.slice(0, serviceIndex),
        newService,
        ...serviceHistory.history.slice(serviceIndex + 1)
      ]
});

export const updateServiceItemAtSelectedServiceAtIndex = (serviceHistory: ServiceHistory, newServiceItem: ServiceItem, serviceIndex: number, serviceItemIndex: number) => {
    const newService = updateServiceItemAtIndex(serviceHistory.history[serviceIndex], newServiceItem, serviceItemIndex);
    return updateServiceAtIndex(serviceHistory, newService, serviceIndex);
};