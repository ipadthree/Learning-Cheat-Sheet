/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetryRecursion(fetcher, maximumRetryCount) {
    // your code here
    return fetcher().catch((e) => {
        if (maximumRetryCount === 0) {
            throw e;
        } else {
            return fetchWithAutoRetryRecursion(fetcher, maximumRetryCount - 1);
        }
    });
}

/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    // your code here
    return new Promise((resolve, reject) => {
        let retryTimes = 0;
        const retry = () => {
            fetcher()
                .then((data) => resolve(data))
                .catch((error) => {
                    if (retryTimes < maximumRetryCount) {
                        retryTimes++;
                        retry();
                    } else {
                        reject(error);
                    }
                });
        };

        retry();
    });
}
