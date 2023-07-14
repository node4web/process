let exitCodeValue = 0;
export = {
  get: () => exitCodeValue,
  set: (exitCode: number) => void (exitCodeValue = exitCode),
};
