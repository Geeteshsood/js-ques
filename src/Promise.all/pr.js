const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 1000);
});
const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2");
  }, 2000);
});
const pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3");
  }, 4000);
});

// Promise.all([pr1, pr2, pr3])
//   .then((result) => {
//     console.log("result", result);
//   })
//   .catch(() => {
//     console.log("error");
//   });

const myPromise = function (taskList) {
  let promiseCompleted = 0;
  let results = [];

  return new Promise((resolve, reject) => {
    taskList.forEach((task, index) => {
      task
        .then((val) => {
          promiseCompleted++;
          results[index] = val;
          if (promiseCompleted == taskList.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

myPromise([pr1, pr2, pr3])
  .then((result) => {
    console.log("result", result);
  })
  .catch((error) => {
    console.log("error", error);
  });
