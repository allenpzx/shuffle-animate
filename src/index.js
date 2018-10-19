/**
 * TODO: 随机动画
 *
 * @param {Array} new ShuffleAnimate(doms<Array>);
 *
 *
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
        let after_shuffle = this.shuffle(this.origin.slice());
        if (props.target) {
            const index = after_shuffle.findIndex(x => {
                if (x.dataset.i === props.target) {
                    return true
                }
            });
            const first = after_shuffle[index];
            after_shuffle = after_shuffle.splice(index, 1).concat(after_shuffle);
        }
        after_shuffle.map((x, i) => {
            const l = this.origin[i].offsetLeft;
            const t = this.origin[i].offsetTop;
            const xl = x.offsetLeft;
            const xt = x.offsetTop;
            const disx = parseFloat(l - xl);
            const disy = parseFloat(t - xt);

            x.style.willChange = `transform`;
            x.style.webkitTransition = `all 600ms ${this.ease.easeInQuart}`;
            x.style.transition = `all 600ms ${this.ease.easeInQuart}`;
            x.style.transform = `translate3d(${disx}px, ${disy}px, 0)`;
        });
    }
}