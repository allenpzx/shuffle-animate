# shuffle-animate

[![NPM](https://nodei.co/npm/shuffle-animate.png)](https://nodei.co/npm/shuffle-animate/)



#### 演示
[点击查看演示](https://allenpzx.github.io/shuffle-animate/example)




#### 使用方法

1. 安装 `npm install shuffle-animate --save;`

2. 引入 `import ShuffleAnimate from 'shuffle-animate';`

3. 实例化

   1. 配置DOM 

      ```html
      <div id='container'> // position: relative || absolute || fixed || sticky ......
          <span data-i='1'>1</span>  // data-i = 'string' 配置索引
          <span data-i='2'>2</span>
          <span data-i='3'>3</span>
      	...
      </div>
      ```

   2. 获取容器 `const box = document.getElementById('container');`

   3. 创建对象 `const sa = new ShuffleAnimate({data: [...box.childrens]});` 

4. 渲染

   ```javascript
   sa.update({
       target: <Number> || <Array>, // '1' || 1 目标值的索引 
       shuffle: <Boolean>, // true || false 是否随机排序, 否的话按正序排列
       ease: <String>, // 'easeInOutCirc' 速度曲线, 可选见下文, 也可以自己定制化贝塞尔曲线
       time: <String>, // `2000ms` `2s` 过渡时间
       center: <Boolean>, // true || false 用此参数则target必填, 表示target块会先过渡到容器的中点(过渡到中点的时间=time), 然后再过渡到目标位置
   });
   
   以上参数都不是必填项 sa.update() 执行默认随机效果
   ```





#### 可选动画曲线

```javascript
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
```

#### 案例

```javascript
(() => {
    const vertical = document.querySelector('#vertical');
    const verticals = new ShuffleAnimate({
        data: [...vertical.children]
    });
    vertical.addEventListener('click', (e) => {
        [...vertical.children].map(x => {
            x.style.color = `black`
        })
        e.target.style.color = `red`;
        verticals.update({
            target: e.target.dataset.i,
            shuffle: false
        });
    })
})();
```