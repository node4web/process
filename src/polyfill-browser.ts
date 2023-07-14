import * as process_ from "./index-browser.js";

declare global {
  var process: typeof process_;
}

globalThis.process = process_;
