function promisify(func) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            const callback = (error, data) => {
                if (error) {
                    reject(error);
                }
                if (data) {
                    resolve(data);
                }
            };

            func.call(this, ...args, callback);
        });
    };
}
