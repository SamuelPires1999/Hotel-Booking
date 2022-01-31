import { Hotel } from '@prisma/client';

export interface IHotelRepository {
    findById(id: string): Promise<Hotel>;
    findAll(): Promise<Hotel[]>;
    save(hotel: Hotel): Promise<void>;
}
