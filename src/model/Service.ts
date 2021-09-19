import ServiceItem from './ServiceItem';

export default interface Service {
    date: Date;
    mileage: number;
    dealer: string;
    bmw: boolean;
    status: string;
    items: ServiceItem[];
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

export const createServiceObject = (): Service => ({
  date: new Date(),
  mileage: 0,
  dealer: '',
  bmw: false,
  status: '1',
  items: [],
});
