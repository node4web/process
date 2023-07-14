export = function cwd() {
  return fileURLToPath("file://" + location.pathname);
};
