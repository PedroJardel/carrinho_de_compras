import { Prisma, PrismaClient, Cart } from '@prisma/client';

export class CartRepository {
    
    private prisma: PrismaClient;
    
    constructor (prisma: PrismaClient) {
        this.prisma = prisma
    }

    async findAll(): Promise<Cart[]> {
        const carts = await this.prisma.cart.findMany();
        return carts;
    }

    async findById(id: string): Promise<Cart | null> {
        return await this.prisma.cart.findUnique({where: { id }});
    }

    async create(data: Prisma.CartCreateInput): Promise<Cart> {
        return await this.prisma.cart.create({ data });
    }

    async update(id: string, data: Prisma.CartUpdateInput): Promise<Cart> {
        return await this.prisma.cart.update({ where: { id }, data });
    }

    async delete(id: string): Promise<Cart> {
        return await this.prisma.cart.delete({ where: { id }});
    }
}