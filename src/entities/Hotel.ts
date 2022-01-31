export class Hotel {
    public name: string;
    public rating: number;
    public daily_price: number;
    public address: string;
    public city: string;
    constructor(props: Hotel) {
        Object.assign(this, props);
    }
}
