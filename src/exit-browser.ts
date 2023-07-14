import exitCode from "./exitCode-browser.js";

export = function exit(code: number): never {
  document.documentElement?.remove();
  document.doctype?.remove();
  close();
  stop();
  if (code ?? exitCode.get()) {
    reportError(new DOMException(`Exit code ${code}`, "AbortError"));
  }
  throw undefined;
};
