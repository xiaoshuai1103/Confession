import React from 'react';
import StyleEditor from './styleEditor';
import Heart from './heart';
import HeartRain from './heartRain';

const isPc = (function () {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}());

export default class App extends React.Component {

    fullStyle = [
        `/*
* Hello 小美，看到你很喜欢这个礼物我很开心
* 也很忐忑
* 开心在于没想到这个小网页会让你这么喜欢，赞不绝口
* 忐忑在于，这是我复制别人的链接
* 在你问我是不是抄的别人的时候，我打趣的跟你说是我自己做的
* 我以为你会不相信，没想到你没有一丝怀疑
* 后来我不忍心告诉你真相，怕你难过
* 所以我也准备做一个，毕竟我就是干这行的嘛
* 简简单单
* 今天的班，只为你而加
* ...
* 你现在用的是。。。${isPc ? '电脑' : '手机'}
*/

/* 首先页面已经打开了，不过内容还是空白的
* 来，我们一点一点网上加东西
* 首先给页面加个过渡效果，让动画看起来更丝滑
* 建房子肯定要用好的砖头
*/
* {
  -webkit-transition: all .5s;
  transition: all .5s;
}
/* 墙面太白了，刷点粉色的漆 */
body, html {
  color: #fff;
  background-color: lightpink;
}

/* 文字是不是有点看不清，我们来调大点 */
.styleEditor {
  ${ isPc ? `font-size: 16px;` : `font-size: 14px;` }
  overflow: auto;
  line-height: 1.5;
  ${ isPc ? `width: 48vw;
  height: 96vh;` : `width: 96vw;
  height: 48vh;` }
  border: 1px solid;
  padding: 10px;
}

/* 我平时写代码的时候，为了能够看的更清晰一点，喜欢用一些高亮的效果 */
.token.selector{ color: #1d7f2d }
.token.property{ color: rgb(187,137,0) }
.token.punctuation{ color: yellow }
.token.function{ color: rgb(42,161,152) }
.token.comment{ color: #cc0865 }

/* 加个 3D 效果，让我们的房间更宽敞 */
html{
  perspective: 1000px;
  -webkit-perspective: 1000px;
}

.styleEditor {
  ${ isPc ? `transform: rotateY(10deg) translateZ(-100px) ;
  -webkit-transform: rotateY(10deg) translateZ(-100px);` : `transform: rotateX(-10deg) translateZ(-100px);
  -webkit-transform: rotateX(-10deg) translateZ(-100px);` } ${ isPc ? '' : `
  transform-origin: 50% 0% 0;
  -webkit-transform-origin: 50% 0% 0;` }
}

/*
* 宝宝，我来教你一个不一样的爱心。
*/

/* 同样，我们先画一个白板 */
.heartWrapper {
  ${ isPc ? `width: 48vw;
  height: 96vh;` : `width: 96vw;
  height: 48vh;`}
  position: relative;
  border: 1px solid;
  background-color: white;
  ${ isPc ?
  `transform: rotateY(-10deg) translateZ(-100px);
  -webkit-transform: rotateY(-10deg) translateZ(-100px);` :
  `transform: rotateX(10deg) translateZ(-100px);
  -webkit-transform: rotateX(10deg) translateZ(-100px);`}${ isPc ? '' :`
  transform-origin: 50% 0% 0;
  -webkit-transform-origin: 50% 0% 0;`}
}

/* 画一个方块，当左心室和右心室 */
.heart {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;
  width: 100px;
  height: 100px;
  background: #E88D8D;
  transform: rotate(45deg);
  border-radius: 20px;
}

/* 画上左心房 */
.heart::before {
  content: '';
  position: absolute;
  left: -38px;
  width: 100px;
  height: 100px;
  background: #E88D8D;
  border-radius: 50%;
}

/* 再画上右心房 */
.heart::after {
  content: '';
  position: absolute;
  top: -38px;
  width: 100px;
  height: 100px;
  background: #E88D8D;
  border-radius: 50%;
}

/* 同样的步骤，我们再画一个白色的小爱心
* 依旧是先画一个小方块
*/
.whiteHeart {
  position: absolute;
  top: calc(50% + 5px);
  left: calc(50% + 5px);
  width: 90px;
  height: 90px;
  margin: -50px 0 0 -50px;
  background: white;
  transform: rotate(45deg);
  border-radius: 20px;
}

/* 画上左心房 */
.whiteHeart::before {
  content: '';
  width: 90px;
  height: 90px;
  position: absolute;
  left: -38px;
  background: white;
  border-radius: 50%;
}

/* 再画上右心房 */
.whiteHeart::after {
  content: '';
  width: 90px;
  height: 90px;
  position: absolute;
  top: -38px;
  background: white;
  border-radius: 50%;
}

/* 我们再来画一个圆形蒙层，用来形成一个遮挡的作用 */
#mark {
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  width: 300px;
  height: 300px;
  border: 1px solid lightpink;
  margin: -50px 0 0 -50px;
  border-radius: 100%;
  list-style: none;
  overflow: hidden;
  transform: rotate(0deg);
  display: block !important;
}

/* 接下来，我们对这个圆进行分割， 分割成十等份 */
.slice {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  border: 1px solid lightpink;
  transform-origin: 0% 100%;
}
.slice-1 {
  transform: rotate(-36deg) skewY(-54deg);
  background: white;
}
.slice-2 {
  transform: rotate(-72deg) skewY(-54deg);
  background: transparent;
}

.slice-3 {
  transform: rotate(-108deg) skewY(-54deg);
  background: white;
}
.slice-4 {
  transform: rotate(-144deg) skewY(-54deg);
  background: transparent;
}
.slice-5 {
  transform: rotate(-180deg) skewY(-54deg);
  background: white;
}
.slice-6 {
  transform: rotate(-216deg) skewY(-54deg);
  background: transparent;
}
.slice-7 {
  transform: rotate(-252deg) skewY(-54deg);
  background: white;
}
.slice-8 {
  transform: rotate(-288deg) skewY(-54deg);
  background: transparent;
}
.slice-9 {
  transform: rotate(-324deg) skewY(-54deg);
  background: white;
}
.slice-10 {
  transform: rotate(-360deg) skewY(-54deg);
  background: transparent;
}

/* 好了，接下来我们让蒙层的边框消失掉 */
#mark, .slice {
  border: none;
}

/*
* Ok，完成啦！我们让他转起来吧~
* 宝贝，七夕快乐！
*/

`
    ]

    state = {
        currentStyleCode: '',
        finished: false,
        heartRains: []
    }

    interval = 30;
    // interval = 0;

    async progressiveShowStyle(n = 0) {
        const {
            interval,
            fullStyle
        } = this;
        const showStyle = i => new Promise((resolve) => {
            const style = fullStyle[n];
            const char = style[i];
            if (!style || !char) {
                resolve();
                return;
            }
            let {
                currentStyleCode
            } = this.state;
            currentStyleCode += char;
            this.setState({
                currentStyleCode
            });
            if (char === '\n' && this.styleEditor) {
                this.styleEditor.toBottom();
            }
            setTimeout(() => {
                resolve(showStyle(i + 1))
            }, interval);
        });
        return showStyle(0);
    }

    async componentDidMount() {
      await this.progressiveShowStyle(0);
      this.setState({finished: true});
      this.rain();
    }

    saveStyleEditorRef = child => this.styleEditor = child;
    
    rain = () => {
        let num = 0;
        const markDom = document.getElementById('mark');
        setInterval(() => {
          num += 10;
          markDom.style.transform = `rotate(${num}deg)`
        }, 100)
    }

    removeRain(time) {
        let { heartRains } = this.state;
        heartRains = heartRains.filter(item => item.time !== time);
        this.setState({heartRains});
    }

    render() {
        const { currentStyleCode, finished, heartRains } = this.state;
        return <div>
            <div style = {{display: isPc ? 'flex' : ''}}>
                <StyleEditor ref={this.saveStyleEditorRef} code={currentStyleCode}/>
                <Heart click={finished ? this.rain: null}/>
            </div>
            {
                heartRains.map(item => <HeartRain num={item.rainNum} key={item.time}/>)
            }
        </div>;
    }
}