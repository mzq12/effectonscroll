### 随着页面滚动触发的动画效果，实现 animate 大部分动效
#### How to use it?
***
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/dist/effect.css">
    <title>Effect on Scroll</title>
    <style>
        .effect-item {
            height: 300px;
            margin-bottom: 12px;
            background: #bfb;
        }
    </style>
</head>

<body>
    <div data-effect="zoom-in-up" data-effect-easing="linear" class="effect-item"></div>
    <div data-effect="zoom-in-up" data-effect-easing="linear" class="effect-item"></div>
    <script src="/dist/effect.js"></script>
    <script>
        EFFECT.init({
            in: function (node) {
                console.log(node)
            },
            out: function (node) {
                console.log(node)
            }
        })
    </script>
</body>

</html>
```
