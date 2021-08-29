import ServiceItem from "../../../model/ServiceItem";
import TextInput from "../../shared/TextInput";

export interface ServiceItemListItemProps {
    item: ServiceItem,
    onServiceItemUpdated: (itme: ServiceItem) => void,
};
 
const ServiceItemListItem: React.FC<ServiceItemListItemProps> = (props) => {
    const { item, onServiceItemUpdated } = props;

    const onItemUpdatedAction = (newValue: string) => {
        const newItem: ServiceItem = {
            ...item,
            serviceType: newValue,
        };
        onServiceItemUpdated(newItem);
    };

    return (
        <>
            <TextInput value={item.serviceType} onChange={onItemUpdatedAction} label={"Service Type"} />
        </>
    );
}
 
export default ServiceItemListItem;