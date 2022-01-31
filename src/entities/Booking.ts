export class Booking {
    public client_id: number;
    public room_id: number;
    public check_in: Date;
    public check_out: Date;
    public status: string;
    constructor(props: Booking) {
        Object.assign(this, props);
    }
}
