export {};

declare global {
  type UseMachineParams<T> = {
    config?: Parameters<T>["0"],
    context?: Parameters<T>["1"]
  }
}
