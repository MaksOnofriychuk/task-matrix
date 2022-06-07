export const createArray = (count: string): number[] => {
  return Array(Number(count))
    .fill(0)
    .map((_, i) => i + 1);
};
