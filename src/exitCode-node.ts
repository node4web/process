export = Object.getOwnPropertyDescriptor(process, "exitCode") as {
  get(): number;
  set(exitCode: number): void;
};
