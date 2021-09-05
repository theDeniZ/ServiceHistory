export default interface ServiceItem {
    status: string;
    serviceType: string;
};

export const createServiceItemObject = (): ServiceItem => ({
    status: "0x1",
    serviceType: "1",
});
