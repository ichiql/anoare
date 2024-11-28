type CutArrayInput<T> = {
  array: T[]; 
  maxLength: number;
};

export function cutArray<T>({ array, maxLength }: CutArrayInput<T>): T[] {
  if (!Number.isInteger(maxLength) || maxLength < 0) {
    throw new Error("maxLength must be a non-negative integer.");
  }

  return array.length > maxLength ? array.slice(0, maxLength) : array;
}
