import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  // categories is attribute this class;
  // whith this, is necessary just defination the access;
  // this case, only the repository that have access;
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  // to defination type of return, just includ ":void(for exemplo)";
  // void is not return function;
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };