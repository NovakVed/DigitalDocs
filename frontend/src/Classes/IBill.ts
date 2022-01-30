export default interface IBill {
    billID: string;
    billTotal: number;
    locationOfSellingPlace: string;
    storeName: string;
    timestamp: string;
    image?: string;
    sellerName: string;
}