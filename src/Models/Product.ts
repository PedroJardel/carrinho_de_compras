export class Product 
{
  constructor(  
    protected id: string,
    protected createdAt: Date,
    protected updatedAt: Date,
    protected title: string,
    protected description: string,
    protected stock: number,
    protected status: boolean,
    protected category: string,
    protected price: number,
    protected code: string,
    protected thumbnail?: string | null,
  ) {}
}
