import { Category } from "../../categories/shared/category.model";

export class Entry {
  constructor(
    public id?: number,
    public name?: string,
    public desctiption?: string,
    public type?: string,
    public amount?: string,
    public date?: string,
    public paid?: boolean,
    public categoryId?: number,
    public category?: Category
  ) { }

  static types = {
    expense: 'Despesa',
    revenue: 'Receita'
  };

  get paidText(): string {
    return this.paidText ? 'Pago' : 'Pendente';
  }

}