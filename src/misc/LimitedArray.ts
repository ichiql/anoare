export class LimitedArray<T> {
  private readonly maxLength: number
  private readonly items: T[] = []

  constructor(maxLength: number) {
    this.maxLength = maxLength
  }

  get length(): number {
    return this.items.length
  }

  includes(item: T): boolean {
    return this.items.includes(item)
  }

  indexOf(item: T): number {
    return this.items.indexOf(item)
  }

  insert(index: number, item: T): void {
    this.items.splice(index, 0, item)
    if (this.items.length > this.maxLength) {
      this.items.shift()
    }
  }

  push(item: T): void {
    this.items.push(item)

    if (this.items.length > this.maxLength) {
      this.items.shift()
    }
  }

  shift(): T | undefined {
    return this.items.shift()
  }

  pop(): T | undefined {
    return this.items.pop()
  }

  unshift(item: T): void {
    this.items.unshift(item)
    if (this.items.length > this.maxLength) {
      this.items.pop()
    }
  }

  splice(start: number, deleteCount: number, ...items: T[]): T[] {
    const deleted = this.items.splice(start, deleteCount, ...items)
    if (this.items.length > this.maxLength) {
      this.items.splice(0, this.items.length - this.maxLength)
    }
    return deleted
  }

  getItems(): T[] {
    return this.items
  }
}
