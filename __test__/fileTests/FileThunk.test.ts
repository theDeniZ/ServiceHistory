import Service, { createServiceObject } from "../../src/model/Service";
import ServiceItem, { createServiceItemObject } from "../../src/model/ServiceItem";
import { getServiceFromALine, getServiceItemsFromAnArray } from "../../src/redux/thunks/FileThunk"

test("service parse from a correct line", () => {
    const line = "3|g_mmi|steuern_servicehistory_add||18;1;2021;0;173890;0;00081;0x1;6;1;0x1;0;0;12;0x1;0;0;5;0x1;0;0;4;0x1;0;0;100;0x1;0;0;11;0x1;0;0";
    const emptyItem = createServiceItemObject();
    const expectedService: Service = {
        ...createServiceObject(),
        date: new Date(2021, 0, 18),
        dealer: "00081",
        mileage: 173890,
        status: "0x1",
        items: [
            {...emptyItem, serviceType: "1"},
            {...emptyItem, serviceType: "12"},
            {...emptyItem, serviceType: "5"},
            {...emptyItem, serviceType: "4"},
            {...emptyItem, serviceType: "100"},
            {...emptyItem, serviceType: "11"}
        ]
    };

    const service = getServiceFromALine(line);

    expect(service).toStrictEqual(expectedService);
});

test("service parse from a wrong structured line", () => {
    const line = "3|g_mmi|steuern_servicehistory_add||18;1;2021;0";

    const service = getServiceFromALine(line);

    expect(service).toBe(null);
});

test("service parse from a wrong line", () => {
    const line = "3|g_mmi";

    const service = getServiceFromALine(line);

    expect(service).toBe(null);
});

test("service parse from an empty line", () => {
    const line = "";

    const service = getServiceFromALine(line);

    expect(service).toBe(null);
});

test("service items from a correct array", () => {
    const itemsArray: string[] = ["6","1","0x1","0","0","12","0x1","0","0","5","0x1","0","0","4","0x1","0","0","100","0x1","0","0","11","0x1","0","0"];
    const emptyItem = createServiceItemObject();
    const expectedItems: ServiceItem[] = [
        {...emptyItem, serviceType: "1"},
        {...emptyItem, serviceType: "12"},
        {...emptyItem, serviceType: "5"},
        {...emptyItem, serviceType: "4"},
        {...emptyItem, serviceType: "100"},
        {...emptyItem, serviceType: "11"}
    ]

    const items = getServiceItemsFromAnArray(itemsArray);

    expect(items).toStrictEqual(expectedItems);
});

test("service items from an empty array", () => {
    const items = getServiceItemsFromAnArray([]);

    expect(items).toHaveLength(0);
});

test("service items from a wrong defined array", () => {
    const itemsArray: string[] = ["7","1","0x1","0","0","12","0x1","0","0","5","0x1","0","0","4","0x1","0","0","100","0x1","0","0","11","0x1","0","0"];

    const items = getServiceItemsFromAnArray(itemsArray);

    expect(items).toHaveLength(0);
});

test("service items from a wrong structured array", () => {
    const itemsArray: string[] = ["6","1","0x1","0","0","12","0x1","0","0","5","0x1","0","0","4","0x1","0","0","100","0x1","0","0","11","0x1","0"];

    const items = getServiceItemsFromAnArray(itemsArray);

    expect(items).toHaveLength(0);
});
