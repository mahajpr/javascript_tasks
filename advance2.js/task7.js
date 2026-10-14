let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise Resolved");
        }, 2000);
    });

    myPromise.then((message) => {
        console.log(message);
    });
