export type MutationReturnType<T> = {
  data: T | null;
  error: string | null;
};
