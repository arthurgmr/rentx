import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppError";

interface IResquest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  // responsable to run this class;
  async execute({ name, description }: IResquest): Promise<void> {
    // validation category;
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );
    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!");
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
