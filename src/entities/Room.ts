export class Room {
    public hotel_id: string;
    public number: string;
    constructor(props: Room) {
        Object.assign(this, props);
    }
}
