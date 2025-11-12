# 练习10 - 闰年判断

创建一个函数来判断给定年份是否为闰年。闰年的判断规则如下：

> 闰年是能被4整除的年份（如1984和2004）。但是，能被100整除的年份不是闰年（如1800和1900），除非它们也能被400整除（如1600和2000，这些实际上是闰年）。（是的，这确实有点复杂）
>
> -- [Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine
> 
```js
leapYears(2000) // 是闰年：返回 true
leapYears(1985) // 不是闰年：返回 false
```

## 提示

- 使用 `if` 语句和 `&&` 运算符来确保所有条件都得到正确判断

还是不太明白？请参考[这个详细说明](https://time-and-calendar.com/leap-years/#:~:text=How%20to%20Know%20if%20Certain%20Year%20is%20a%20Leap%20Year)中的示例。
