# 练习 03 - numberChecker

修改代码，使其在数字大于或等于10时返回`true`，在数字小于10时返回`false`。

目前，代码在数字为`6`时返回`true`，否则返回`false`。

你可能还注意到，在这个练习中，文件`numberChecker.spec.js`包含多个测试。目前只有第一个测试是启用的。因此，在确保第一个测试通过后，通过删除`test.skip()`函数中的`.skip`部分来启用下一个测试。通常一次只启用一个测试会更容易，然后编辑你的代码使其通过。你可以继续一次只启用一个测试，直到慢慢地但肯定地，所有测试都通过！

- 如果运行`npm test numberChecker.spec.js`返回的结果类似于下面所示，请确保你已经按照上面的说明启用了其余的测试。

```
Test Suites: 1 passed, 1 total
Tests:       3 skipped, 1 passed, 4 total
```

## 提示

- 你只需要编辑第2行。

- 查看JavaScript中比较运算符的文档以获取快速参考。
