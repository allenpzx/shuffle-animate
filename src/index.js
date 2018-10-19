/**
 * TODO: 随机动画
 *
 * @param {Array} new ShuffleAnimate(doms<Array or Array-like>) => instance; 
 * 初始化获得实例 doms 是类数组或者数组都可以, doms的容器组件设置position属性最好
 * 
 * @param {Object} {
 * sa.update({
 *   target: <Number> || <Array>, // '1' || 1 目标值的索引 
 *   shuffle: <Boolean>, // true || false 是否随机排序, 否的话按正序排列
 *   ease: <String>, // 'easeInOutCirc' 速度曲线, 可选见下文, 也可以自己定制化贝塞尔曲线
 *   time: <String>, // `2000ms` `2s` 过渡时间
 *   center: <Boolean>, // true || false 用此参数则target必填, 表示target块会先过渡到容器的中点(过渡到中点的时间=time), 然后再过渡到目标位置
 * });
 * 以上参数都不是必填项 sa.update() 执行默认随机效果
 * 
 * @example 
 * 
 *  const box = document.querySelector('#box');
 *  const gs = new ShuffleAnimate({
 *      data: [...box.children] // 容器内子元素的集合 类数组或者数组都可以
 *  });
 *   box.addEventListener('click', (e) => {
 *      e.stopPropagation()
 *       [...box.children].map(x => {
 *           x.style.color = `black`
 *       })
 *       e.target.style.color = `red`;
 *       gs.update({
 *           target: e.target.dataset.i,
 *           shuffle: true,
 *           ease: 'easeInOutCirc',
 *           time: `2000ms`
 *       });
 *   })
 *
 **/

class ShuffleAnimate {
    constructor(props) {
        this.origin = Array.from(props.data.slice());
        this.ease = {
            easeInSine: `cubic-bezier(0.47, 0, 0.745, 0.715)`,
            easeOutSine: `cubic-bezier(0.39, 0.575, 0.565, 1)`,
            easeInOutSine: `cubic-bezier(0.445, 0.05, 0.55, 0.95)`,

            easeInQuad: `cubic-bezier(0.55, 0.085, 0.68, 0.53)`,
            easeOutQuad: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            easeInOutQuad: `cubic-bezier(0.455, 0.03, 0.515, 0.955)`,

            easeInCubic: `cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
            easeOutCubic: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
            easeInOutCubic: `cubic-bezier(0.645, 0.045, 0.355, 1)`,

            easeInQuart: `cubic-bezier(0.895, 0.03, 0.685, 0.22)`,
            easeOutQuart: `cubic-bezier(0.165, 0.84, 0.44, 1)`,
            easeInOutQuart: `cubic-bezier(0.77, 0, 0.175, 1)`,

            easeInQuint: `cubic-bezier(0.755, 0.05, 0.855, 0.06)`,
            easeOutQuint: `cubic-bezier(0.23, 1, 0.32, 1)`,
            easeInOutQuint: `cubic-bezier(0.86, 0, 0.07, 1)`,

            easeInExpo: `cubic-bezier(0.95, 0.05, 0.795, 0.035)`,
            easeOutExpo: `cubic-bezier(0.19, 1, 0.22, 1)`,
            easeInOutExpo: `cubic-bezier(1, 0, 0, 1)`,

            easeInCirc: `cubic-bezier(0.6, 0.04, 0.98, 0.335)`,
            easeOutCirc: `cubic-bezier(0.075, 0.82, 0.165, 1)`,
            easeInOutCirc: `cubic-bezier(0.785, 0.135, 0.15, 0.86)`,

            easeInBack: `cubic-bezier(0.6, -0.28, 0.735, 0.045`,
            easeOutBack: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
            easeInOutBack: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
        }
    }

    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    update(props) {
        let doms = props && props.shuffle === false ? this.origin.slice() : this.shuffle(this.origin.slice());
        if (props && props.target) {
            const index = doms.findIndex(x => x.dataset.i === props.target);
            doms = doms.splice(index, 1).concat(doms);
        }
        doms.map((x, i) => {
            const l = this.origin[i].offsetLeft;
            const t = this.origin[i].offsetTop;
            const xl = x.offsetLeft;
            const xt = x.offsetTop;
            const disx = parseFloat(l - xl);
            const disy = parseFloat(t - xt);
            const time = props && props.time ? props.time : `600ms`;
            const ease = props && props.ease 
                        ? this.ease.hasOwnProperty(props.ease) ? this.ease[props.ease] :  props.ease
                        : this.ease.easeInSine;

            x.style.willChange = `transform`;

            if (i === 0 && props && props.center) {
                const box = x.parentElement;
                const boxX = box.offsetWidth;
                const boxY = box.offsetHeight;
                const cx = boxX * 0.5;
                const cy = boxY * 0.5;
                const discx = parseFloat(cx - xl) - (x.offsetWidth * 0.5);
                const discy = parseFloat(cy - xt) - (x.offsetHeight * 0.5);
                const _zIndex = x.style.zIndex;

                x.style.zIndex = `999`;
                x.style.webkitTransition = `transform ${time} ${ease}`;
                x.style.transition = `transform ${time} ${ease}`;

                x.style.webkitTransform = `translate3d(${discx}px, ${discy}px, 0) scale(1.5, 1.5)`;
                x.style.transform = `translate3d(${discx}px, ${discy}px, 0) scale(1.5, 1.5)`;

                setTimeout(() => {
                    x.style.zIndex = _zIndex;
                    x.style.webkitTransform = `translate3d(${disx}px, ${disy}px, 0) scale(1, 1)`;
                    x.style.transform = `translate3d(${disx}px, ${disy}px, 0) scale(1, 1)`;
                }, parseFloat(time));
                return
            }
            
            x.style.webkitTransition = `transform ${time} ${ease}`;
            x.style.transition = `transform ${time} ${ease}`;
            x.style.webkitTransform = `translate3d(${disx}px, ${disy}px, 0)`;
            x.style.transform = `translate3d(${disx}px, ${disy}px, 0)`;

        });
    }
}

module.exports = ShuffleAnimate