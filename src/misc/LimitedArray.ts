export class LimitedArray<T> {
  private readonly maxLength: number
  private readonly items: T[] = []

  constructor(maxLength: number) {
    this.maxLength = maxLength
  }

  get length(): number {
    return this.items.length
  }

  addItem(item: T): void {
    this.items.push(item)

    if (this.items.length > this.maxLength) {
      this.items.shift()
    }
  }

  getItems(): T[] {
    return this.items
  }
}
