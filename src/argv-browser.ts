// "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
// or whatever best-guess is for the current browser/platform
const bin = "/browser";
const path = fileURLToPath("file://" + location.pathname);
const argv = [bin, path];
if (!location.search.includes("=")) {
  argv.push(location.search.slice(1));
}

export = argv;
