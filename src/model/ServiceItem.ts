export default interface ServiceItem {
    status: string;
    serviceType: string;
};

export const createServiceItem = (): ServiceItem => ({
    status: "1",
    serviceType: "",
});
