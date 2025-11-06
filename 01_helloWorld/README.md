# 练习 01 - Hello World

这个练习的主要目的是引导你完成运行测试的过程，并确保一切设置正确且运行正常。

在这个目录中，你会找到另外两个文件：

1. `helloWorld.js`
2. `helloWorld.spec.js`

所有练习的设置都应该类似。普通的JavaScript文件是你编写代码的地方，而`spec`文件包含验证你代码功能的测试。

让我们先看一下spec文件：

```javascript
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```

在文件的最顶部，我们使用`require()`从JavaScript文件（`helloWorld.js`）中导入代码，以便我们可以测试它。

下一个代码块（`describe()`）是测试的主体。基本上，它只是运行你的代码并测试输出是否正确。`test()`函数用简单的英语描述应该发生什么，然后包含`expect()`函数。对于这个简单的例子，应该很容易理解。

现在你不需要担心如何编写测试，但你应该尝试足够熟悉语法，以弄清楚测试要求你做什么。通过在终端中输入`npm test helloWorld.spec.js`来运行测试，观察它失败。该命令的输出应该确切地告诉你代码出了什么问题。在这种情况下，运行`helloWorld()`函数应该返回短语'Hello, World!'，但它却返回一个空字符串...

让我们看一下JavaScript文件：

```javascript
const helloWorld = function() {
  return ''
}

module.exports = helloWorld
```

在这个文件中，我们有一个名为helloWorld的简单函数，它返回一个空字符串...这正是我们的测试所抱怨的。最后一行的`module.exports`是我们导出函数的方式，以便可以在spec文件中使用`require()`导入它。

请尝试通过编辑函数的返回值来使测试通过，然后再次运行测试文件。

为了确保你理解，如果你现在感到困惑，测试是在告诉你，运行函数`helloWorld`应该返回短语`Hello, World!`。标点符号和大小写绝对重要，所以如果测试仍然没有通过，请仔细检查。

最终的函数应该是这样的：

```javascript
const helloWorld = function() {
  return 'Hello, World!'
}

module.exports = helloWorld
```

在大多数情况下，我们设置这些测试的方式是，你只需要更新或编写被测试的代码。在这个阶段，你不需要担心导入或导出任何东西...所以只需在代码的那一部分周围工作，并编写所需的代码以使它们通过！
