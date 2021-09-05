export enum ServiceType {
    engineOil = "1",
    frontBreaks = "2",
    brakeFluid = "3",
    microFilter = "4",
    recirculatingAirFilter = "5",
    rearBreaks = "6",
    sparkPlugs = "10",
    airFilter = "11",
    fuelFilter = "12",
    vehicleCheck = "100",
    preDelivery = "20",
    serviceInspection = "21",
    statutoryInspection = "32",
    emissionsTest = "33"
};

export const getDisplayNameForServiceType = (serviceType: ServiceType): string => {
    switch (serviceType) {
        case ServiceType.engineOil: return "Engine oil";
        case ServiceType.frontBreaks: return "Front breaks";
        case ServiceType.brakeFluid: return "Brake fluid";
        case ServiceType.microFilter: return "Microfilter";
        case ServiceType.recirculatingAirFilter: return "Recirculating air filter";
        case ServiceType.rearBreaks: return "Rear breaks";
        case ServiceType.sparkPlugs: return "Spark plugs";
        case ServiceType.airFilter: return "Air filter";
        case ServiceType.fuelFilter: return "Fuel filter";
        case ServiceType.vehicleCheck: return "Vehicle check";
        case ServiceType.preDelivery: return "Pre-delivery";
        case ServiceType.serviceInspection: return "Service inspection";
        case ServiceType.statutoryInspection: return "Statutory inspection";
        case ServiceType.emissionsTest: return "Emissions test";
    }
};

export const getServiceTypePickerOptions = (): {value: ServiceType, label: string}[] => {
    return [
        { value: ServiceType.engineOil, label: getDisplayNameForServiceType(ServiceType.engineOil) },
        { value: ServiceType.frontBreaks, label: getDisplayNameForServiceType(ServiceType.frontBreaks) },
        { value: ServiceType.brakeFluid, label: getDisplayNameForServiceType(ServiceType.brakeFluid) },
        { value: ServiceType.microFilter, label: getDisplayNameForServiceType(ServiceType.microFilter) },
        { value: ServiceType.recirculatingAirFilter, label: getDisplayNameForServiceType(ServiceType.recirculatingAirFilter) },
        { value: ServiceType.rearBreaks, label: getDisplayNameForServiceType(ServiceType.rearBreaks) },
        { value: ServiceType.sparkPlugs, label: getDisplayNameForServiceType(ServiceType.sparkPlugs) },
        { value: ServiceType.airFilter, label: getDisplayNameForServiceType(ServiceType.airFilter) },
        { value: ServiceType.fuelFilter, label: getDisplayNameForServiceType(ServiceType.fuelFilter) },
        { value: ServiceType.vehicleCheck, label: getDisplayNameForServiceType(ServiceType.vehicleCheck) },
        { value: ServiceType.preDelivery, label: getDisplayNameForServiceType(ServiceType.preDelivery) },
        { value: ServiceType.serviceInspection, label: getDisplayNameForServiceType(ServiceType.serviceInspection) },
        { value: ServiceType.statutoryInspection, label: getDisplayNameForServiceType(ServiceType.statutoryInspection) },
        { value: ServiceType.emissionsTest, label: getDisplayNameForServiceType(ServiceType.emissionsTest) },
    ];
};
