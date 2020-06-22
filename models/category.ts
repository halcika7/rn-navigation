export class Category {
  private readonly _id: string;

  private readonly _title: string;

  private readonly _color: string;

  constructor(id: string, title: string, color: string) {
    this._id = id;
    this._title = title;
    this._color = color;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get color(): string {
    return this._color;
  }
}
