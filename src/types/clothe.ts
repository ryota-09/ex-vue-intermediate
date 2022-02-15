export class Clothe {
  constructor(
    private _id: number,
    private _category: string,
    private _genre: string,
    private _gender: number,
    private _color: string,
    private _price: number,
    private _size: string
  ) {}

  public get formatGender(): string {
    let str = "";
    if (this._gender === 0) {
      str = "男";
    } else if (this._gender === 1) {
      str = "女";
    }
    return str;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get category(): string {
    return this._category;
  }

  public set category(category: string) {
    this._category = category;
  }

  public get genre(): string {
    return this._genre;
  }

  public set genre(genre: string) {
    this._genre = genre;
  }

  public get gender(): number {
    return this._gender;
  }

  public set gender(gender: number) {
    this._gender = gender;
  }

  public get color(): string {
    return this._color;
  }

  public set color(color: string) {
    this._color = color;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }

  public get size(): string {
    return this._size;
  }

  public set size(size: string) {
    this._size = size;
  }
}
