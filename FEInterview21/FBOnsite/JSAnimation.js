//callback 得到一个参数 —— 从页面加载开始经过的毫秒数。
let requestId = requestAnimationFrame(callback);
/**
 * 只在每次repaint时候callback会被call
 */
// 取消回调的周期执行
cancelAnimationFrame(requestId);

function animateBox(distance, duration) {
    let start = performance.now(); //也是从页面加载开始经过的毫秒数，与callback里的time一样
    requestAnimationFrame(function animate(milliseconds) {
        let progress = (milliseconds - start) / duration;
        if (progress > 1) progress = 1;

        let currentDistance = distance * progress;

        element.style.transform = `translate(${currentDistance}px)`;
        /**
         * translate(100px或者50%) 一个value就是x轴上移动
         * translate(30%, 200px) 两个value就是x 和 y轴移动
         */
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    });
}

function animate({ timing, draw, duration }) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction 从 0 增加到 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // 计算当前动画状态
        let progress = timing(timeFraction);

        draw(progress); // 绘制

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

let prev = performance.now();
let times = 0;

requestAnimationFrame(function measure(time) {
    document.body.insertAdjacentHTML('beforeEnd', Math.floor(time - prev) + ' ');
    prev = time;

    if (times++ < 10) requestAnimationFrame(measure);
});
