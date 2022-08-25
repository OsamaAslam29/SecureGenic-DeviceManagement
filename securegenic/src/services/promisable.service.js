export const Promisable = {
  asPromise(promise) {
    return new Promise((resolve) =>
      promise.then(
        (res) => resolve([res, null]),
        (err) => resolve([null, err])
      )
    );
  },
};
