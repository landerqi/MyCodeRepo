/**
 * Created by Administrator on 14-11-7.
 */


/**
 * Event:
 *
 */

(function () {
        // self fields.
    var el = "#scroll-tip",

        // canvas and drawing context.
        canvas = document.getElementById("canvas-tip"),
        graphic = canvas.getContext("2d"),

        waitDelay = 2000,
        drawingTick = null ,

        arrow = { tween: null, x: 0, y: 60, w: 14, h: 8, alpha: 1 },
        scroll = { tween: null, alpha: 0.7 },

        _tipBtnState = 0, //提示按扭的当前状态

        arrowY = 0,
        arrowPow = 45,
        tipBtnVal = 0,
        tipBtnOffsetY = 0,
        tipBtnArrowH = 0,
        tipBtnArrowY = 0

    onInit();

    function onInit() {

        var winWH = findDimensions();
        canvas.width = winWH.winWidth;
        canvas.height = winWH.winHeight;

        $(el).fadeIn();
        showArrow();
        drawingTick = setInterval($.proxy(draw, this), 25);

        /*
        setTimeout(function(){
            $(el).fadeOut();
            clearInterval(drawingTick);
        },5000)
        */

        $(el).on("touchstart", $.proxy(onClickScreen, this));
    }

    function findDimensions() {
        //获取窗口宽度
        var win = {
            winWidth: null,
            winHeight: null
        }

        if (window.innerWidth) {
            win.winWidth = window.innerWidth;
        }

        else if ((document.body) && (document.body.clientWidth)) {
            win.winWidth = document.body.clientWidth;
        }

        //获取窗口高度
        if (window.innerHeight) {
            win.winHeight = window.innerHeight;
        }

        else if ((document.body) && (document.body.clientHeight)) {
            win.winHeight = document.body.clientHeight;
        }
        return win;
    }

    function onClickScreen() {
        setTimeout(function(){
            $(el).fadeOut();
            clearInterval(drawingTick);
        },500)
    }

    function showArrow() {
        arrow.x = canvas.width * .5;
    }

    function draw() {
        graphic.clearRect(0, 0, canvas.width, canvas.height);

        drawArrow();

        if (scroll.alpha > 0) {
            drawScroll();
        }
    }

    function drawArrow() {
        var g = graphic;

        var x = canvas.width * .5;

        arrowPow--;
        if (arrowPow < 1) arrowPow = 45;
        arrowY = 40 - Math.pow(1.1, arrowPow);


        if (arrowY > 40) {
            arrowY = 0;
            arrowPow = 45;
        }

        var y = arrowY;

        for (var i = 0; i < 1; i++) {
            var offset = (i * 10);

            var a = 1 - arrowY / 40;

            g.save();
            g.lineJoin = "round";
            g.lineCap = "round";
            g.strokeStyle = "#ffffff";
            g.lineWidth = 3.5;
            g.globalAlpha = a;

            g.beginPath();
            g.moveTo(x - 14 + i, y + offset);
            g.lineTo(x, y + 8 + offset);
            g.lineTo(x + 14 - i, y + offset);
            g.stroke();
            g.closePath();
            g.restore();
        }

    }

    function drawScroll() {

        //遮罩
        drawMask();

        var w = canvas.width, h = canvas.height;
        var g = graphic;

        function drawDot() {
            //画点
            g.save();
            g.beginPath();
            g.lineCap = "round";
            g.lineJoin = "round";
            g.strokeStyle = "#000";
            g.lineWidth = 3.5;
            g.moveTo(w / 2, h / 4);
            g.lineTo(w / 2, h / 4 + 1);

            g.closePath();
            g.stroke();
            g.restore();
        };

        //下滑按扭
        g.save();

        switch (_tipBtnState) {
            case 0:
            {
                //开始先画点并扩大
                tipBtnVal += 3;
                if (tipBtnVal > 30) {

                    _tipBtnState = 1;//切换至下一状态
                }
                g.fillStyle = "#fff";
                g.arc(w / 2, h / 4, tipBtnVal, 0, 360);
                g.fill();

                drawDot();
                break;
            }
            case 1:
            {
                //开始先画点并扩大
                tipBtnVal -= 1;
                if (tipBtnVal <= 20) {

                    _tipBtnState = 2;//切换至下一状态
                }
                g.fillStyle = "#fff";
                g.arc(w / 2, h / 4, tipBtnVal, 0, 360);
                g.fill();

                drawDot();
                break;
            }
            case 2:
            {
                //开始向下拉伸
                tipBtnOffsetY += 15;
                if (tipBtnOffsetY > 200) {
                    _tipBtnState = 3;//切换至下一状态
                }
                //画圆1
                g.fillStyle = "#fff";
                g.arc(w / 2, h / 4, 20, 0, 360);

                //画中间rect
                g.fillRect(w / 2 - 20, h / 4, 40, tipBtnOffsetY);
                //画圆2
                g.arc(w / 2, h / 4 + tipBtnOffsetY, 20, 0, 360);
                g.fill();

                drawDot();
                break;
            }
            case 3:
            {
                //开始画剪头并下移
                if (tipBtnArrowY == 0) {
                    tipBtnArrowH += 5;
                    if (tipBtnArrowH > 200) {
                        tipBtnArrowY++;
                    }
                } else {
                    tipBtnArrowY += 8;
                    if (tipBtnArrowY > 200) {
                        tipBtnArrowY = 0;
                        tipBtnArrowH = 0;
                    }
                }

                g.beginPath();
                //画圆1
                g.fillStyle = "#fff";
                g.arc(w / 2, h / 4, 20, 0, 360);

                //画中间rect
                g.fillRect(w / 2 - 20, h / 4, 40, tipBtnOffsetY);
                //画圆2
                g.arc(w / 2, h / 4 + tipBtnOffsetY, 20, 0, 360);
                g.fill();
                g.closePath();

                //画箭头
                g.save();
                g.beginPath();
                g.strokeStyle = "#000";
                g.lineWidth = 4;
                g.lineCap = "round";
                g.lineJoin = "round";
                g.moveTo(w / 2, h / 4 + tipBtnArrowY);
                g.lineTo(w / 2, h / 4 + tipBtnArrowH);
                g.moveTo(w / 2 - 5, h / 4 + tipBtnArrowH - 5);
                g.lineTo(w / 2, h / 4 + tipBtnArrowH);
                g.lineTo(w / 2 + 5, h / 4 + tipBtnArrowH - 5);
                g.stroke();
                g.closePath();

                g.restore();

                drawDot();

                break;
            }
        }
        g.restore();
    }

    function drawMask() {
        graphic.save();
        graphic.beginPath();
        graphic.fillStyle = "#000000";
        graphic.globalAlpha = scroll.alpha;
        graphic.fillRect(0, 0, canvas.width, canvas.height);
        graphic.closePath();
        graphic.restore();
    }

})()
