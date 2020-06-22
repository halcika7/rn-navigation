/* eslint-disable max-params */
export class Meal {
  private readonly _id: string;

  private readonly _categoryIds: string[];

  private readonly _title: string;

  private readonly _affordability: string;

  private readonly _complexity: string;

  private readonly _imageUrl: string;

  private readonly _duration: number;

  private readonly _ingredients: string[];

  private readonly _steps: string[];

  private readonly _isGlutenFree: boolean;

  private readonly _isVegan: boolean;

  private readonly _isVegetarian: boolean;

  private readonly _isLactoseFree: boolean;

  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: number,
    ingredients: string[],
    steps: string[],
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean
  ) {
    this._id = id;
    this._categoryIds = categoryIds;
    this._title = title;
    this._affordability = affordability;
    this._complexity = complexity;
    this._imageUrl = imageUrl;
    this._duration = duration;
    this._ingredients = ingredients;
    this._steps = steps;
    this._isGlutenFree = isGlutenFree;
    this._isVegan = isVegan;
    this._isVegetarian = isVegetarian;
    this._isLactoseFree = isLactoseFree;
  }

  get id(): string {
    return this._id;
  }

  get categoryIds(): string[] {
    return this._categoryIds;
  }

  get title(): string {
    return this._title;
  }

  get affordability(): string {
    return this._affordability;
  }

  get complexity(): string {
    return this._complexity;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get durration(): number {
    return this._duration;
  }

  get ingredients(): string[] {
    return this._ingredients;
  }

  get steps(): string[] {
    return this._steps;
  }

  get isGlutenFree(): boolean {
    return this._isGlutenFree;
  }

  get isLactoseFree(): boolean {
    return this._isLactoseFree;
  }

  get isVegan(): boolean {
    return this._isVegan;
  }

  get isVegetarian(): boolean {
    return this._isVegetarian;
  }
}
