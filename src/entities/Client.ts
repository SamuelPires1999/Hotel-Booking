export class Client {
    public cpf: string;
    public first_name: string;
    public last_name: string;
    constructor(props: Client) {
        Object.assign(this, props);
    }
}
