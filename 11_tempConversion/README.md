# 练习11 - 温度转换

编写两个函数，分别实现华氏度到摄氏度和摄氏度到华氏度的转换：

```javascript
convertToCelsius(32) // 华氏度转摄氏度，应该返回 0

convertToFahrenheit(0) // 摄氏度转华氏度，应该返回 32
```

为了方便人类阅读，我们需要将结果温度四舍五入到小数点后一位：例如，`convertToCelsius(100)` 应该返回 `37.8` 而不是 `37.77777777777778`。

这个练习需要创建多个函数，所以主JavaScript文件中的 `module.exports` 部分看起来会有些不同。不用担心，我们只是将两个函数打包成一个对象进行导出。

## 提示

- 你可以在 [Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature) 上找到相关的转换公式。

- 尝试自己搜索如何在JavaScript中将数字四舍五入到小数点后一位。如果遇到困难，可以查看[这里](https://stackoverflow.com/q/7342957/5433628)。
