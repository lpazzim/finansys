import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model";
import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de contas da casa' },
      { id: 2, name: 'Saúde', description: 'Plano de saúde e remédios' },
      { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
      { id: 4, name: 'Salário', description: 'Recebimento de Salario' },
      { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' }
    ];

    const entries: Entry[] = [
      { id: 1, name: 'Gás de cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: '14/10/2018', amount: '70,80', type: 'expense', desctiption: 'Qualquer descrição para esta despesa' } as Entry,
      { id: 2, name: 'Plano de Saude', categoryId: categories[1].id, category: categories[1], paid: true, date: '17/10/2018', amount: '500,00', type: 'expense', desctiption: 'Plano de saude Mil' } as Entry,
      { id: 3, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: '23/12/2018', amount: '50,60', type: 'expense', desctiption: 'O Senhor dos anéis' } as Entry,
      { id: 4, name: 'Salário', categoryId: categories[3].id, category: categories[3], paid: true, date: '10/10/2018', amount: '5000,00', type: 'revenue', desctiption: 'Salário empresa programação' } as Entry,
      { id: 5, name: 'Freela Loja online', categoryId: categories[4].id, category: categories[4], paid: true, date: '15/10/2018', amount: '2000,00', type: 'revenue', desctiption: 'Freela construção loja online' } as Entry,
    ];

    return { categories, entries }
  }
}
