import { Client } from '@prisma/client';

export interface IClientRepository {
    findByCpf(cpf: string): Promise<Client>;
    findById(id: string): Promise<Client>;
    save(client: Client): Promise<void>;
}
