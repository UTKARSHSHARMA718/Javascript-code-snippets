const myPromiseAll = async (allPromises) => {
  const result = [];
  return await new Promise((resolve, reject) => {
    allPromises?.forEach((val, index) => {
      val
        ?.then((output) => {
          result.push(output);
          if (index === allPromises?.length - 1) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const createFakePromise = (isResolve) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isResolve) resolve(1);
      else reject(-1);
    }, 2000);
  });
};

const getOutput = async () => {
  const res = await myPromiseAll([
    createFakePromise(true),
    createFakePromise(true),
    createFakePromise(false),
  ]);
  console.log({ res });
  return res;
};

getOutput();
