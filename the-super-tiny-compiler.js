'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * Today we're going to write a compiler together. But not just any compiler... A
 * super duper teeny tiny compiler! A compiler that is so small that if you
 * remove all the comments this file would only be ~200 lines of actual code.
 *
 * We're going to compile some lisp-like function calls into some C-like
 * function calls.
 *
 * If you are not familiar with one or the other. I'll just give you a quick intro.
 *
 * If we had two functions `add` and `subtract` they would be written like this:
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * Easy peezy right?
 *
 * Well good, because this is exactly what we are going to compile. While this
 * is neither a complete LISP or C syntax, it will be enough of the syntax to
 * demonstrate many of the major pieces of a modern compiler.
 * 
 * 今天我们将一起编写一个编译器，一个超级小巧的编译器！  
 * 去除所有注释后，这个文件的实际代码行数将只有大约200行。  
 *  
 * 我们将把类似Lisp的函数调用编译成类似C的函数调用。  
 *  
 * 如果你不熟悉其中一种或两种语言，下面是一个简短的介绍。  
 *  
 * 假设我们有两个函数 `add` 和 `subtract`，它们的写法如下：  
 *  
 * Lisp 语法                       C 语法  
 * (add 2 2)                       add(2, 2)  
 * (subtract 4 2)                 subtract(4, 2)  
 * (add 2 (subtract 4 2))         add(2, subtract(4, 2))  
 *  
 * 是不是很简单？  
 *  
 * 很好，因为这正是我们要编译的内容。虽然这既不是完整的Lisp也不是C语法，  
 * 但它将足以展示现代编译器的许多核心组件。 
 */

/**
 * Most compilers break down into three primary stages: Parsing, Transformation,
 * and Code Generation
 *
 * 1. *Parsing* is taking raw code and turning it into a more abstract
 *    representation of the code.
 *
 * 2. *Transformation* takes this abstract representation and manipulates to do
 *    whatever the compiler wants it to.
 *
 * 3. *Code Generation* takes the transformed representation of the code and
 *    turns it into new code.
 * 
 * 
 * 大多数编译器可以分为三个主要阶段：解析（Parsing）、转换（Transformation）和代码生成（Code Generation）。  
 *  
 * 1. *解析* 是将原始代码转换为代码的更抽象表示。  
 *  
 * 2. *转换* 对这个抽象表示进行操作，以实现编译器希望其执行的任何操作。  
 *  
 * 3. *代码生成* 将已转换的代码表示转换为新代码。
 */

/**
 * Parsing
 * 解析（Parsing）  
 * -------
 *
 * Parsing typically gets broken down into two phases: Lexical Analysis and
 * Syntactic Analysis.
 *
 * 1. *Lexical Analysis* takes the raw code and splits it apart into these things
 *    called tokens by a thing called a tokenizer (or lexer).
 *
 *    Tokens are an array of tiny little objects that describe an isolated piece
 *    of the syntax. They could be numbers, labels, punctuation, operators,
 *    whatever.
 *
 * 2. *Syntactic Analysis* takes the tokens and reformats them into a
 *    representation that describes each part of the syntax and their relation
 *    to one another. This is known as an intermediate representation or
 *    Abstract Syntax Tree.
 *
 *    An Abstract Syntax Tree, or AST for short, is a deeply nested object that
 *    represents code in a way that is both easy to work with and tells us a lot
 *    of information.
 *
 * 解析通常被细分为两个阶段：词法分析（Lexical Analysis）和语法分析（Syntactic Analysis）。  
 *  
 * 1. *词法分析* 通过词法分析器（也称为词法分析器或分词器）将原始代码拆分为称为标记（tokens）的单元。  
 *  
 *    标记是一个包含描述语法孤立片段的小对象的数组。它们可以是数字、标签、标点符号、操作符等。  
 *  
 * 2. *语法分析* 将标记重新组合成描述语法各个部分及其相互关系的表示形式。这被称为中间表示或抽象语法树（AST）。  
 *  
 *    抽象语法树（AST）是一个深度嵌套的对象，以易于处理的方式表示代码，并提供了大量信息。  
 *  
 * For the following syntax:
 * 对于以下语法： 
 *
 *   (add 2 (subtract 4 2))
 *
 * Tokens might look something like this:
 * 标记可能如下所示： 
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * And an Abstract Syntax Tree (AST) might look like this:
 * 而一个抽象语法树（AST）可能如下所示：  
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 * 
 * 
 * 
 */

/**
 * Transformation
 * 转换（Transformation）  
 * --------------
 *
 * The next type of stage for a compiler is transformation. Again, this just
 * takes the AST from the last step and makes changes to it. It can manipulate
 * the AST in the same language or it can translate it into an entirely new
 * language.
 * 编译器的下一个阶段是转换。这个阶段同样基于上一步生成的AST，并对其进行修改。它可以在同一语言内操作AST，也可以将其转换为全新的语言。  
 * 
 *
 * Let’s look at how we would transform an AST.
 * 让我们看看如何转换AST。 
 *
 * You might notice that our AST has elements within it that look very similar.
 * There are these objects with a type property. Each of these are known as an
 * AST Node. These nodes have defined properties on them that describe one
 * isolated part of the tree.
 * 你可能会注意到，我们的AST中包含了一些看起来非常相似的元素。这些都是具有type属性的对象。每个这样的对象都被称为AST节点（ASTNode）。这些节点定义了描述树中独立部分的属性。  
 *  
 * We can have a node for a "NumberLiteral":
 * 我们可以有一个“NumberLiteral”节点：
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * Or maybe a node for a "CallExpression":
 * 或者一个“CallExpression”节点： 
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * When transforming the AST we can manipulate nodes by
 * adding/removing/replacing properties, we can add new nodes, remove nodes, or
 * we could leave the existing AST alone and create an entirely new one based
 * on it.
 * 在转换AST时，我们可以通过添加/删除/替换属性来操作节点，可以添加新节点，删除节点，或者基于现有AST创建一个全新的AST。  
 *  
 * Since we’re targeting a new language, we’re going to focus on creating an
 * entirely new AST that is specific to the target language.
 * 由于我们针对的是新语言，我们将专注于创建一个特定于目标语言的全新AST。  
 *  
 * Traversal
 * 遍历（Traversal） 
 * ---------
 *
 * In order to navigate through all of these nodes, we need to be able to
 * traverse through them. This traversal process goes to each node in the AST
 * depth-first.
 * 为了遍历所有这些节点，我们需要能够访问它们。这个遍历过程将按照深度优先顺序访问AST中的每个节点。  
 *  
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * So for the above AST we would go:
 * 因此，对于上述AST，我们将按照以下顺序遍历：  
 *
 *   1. Program - Starting at the top level of the AST
 *      Program - 从AST的顶层开始  
 *   2. CallExpression (add) - Moving to the first element of the Program's body
 *      CallExpression (add) - 移动到Program主体的第一个元素  
 *   3. NumberLiteral (2) - Moving to the first element of CallExpression's params
 *      NumberLiteral (2) - 移动到CallExpression参数的第一个元素 
 *   4. CallExpression (subtract) - Moving to the second element of CallExpression's params
 *      CallExpression (subtract) - 移动到CallExpression参数的第二个元素  
 *   5. NumberLiteral (4) - Moving to the first element of CallExpression's params
 *      NumberLiteral (4) - 移动到CallExpression参数的第一个元素  
 *   6. NumberLiteral (2) - Moving to the second element of CallExpression's params
 *      NumberLiteral (2) - 移动到CallExpression参数的第二个元素  
 *
 * If we were manipulating this AST directly, instead of creating a separate AST,
 * we would likely introduce all sorts of abstractions here. But just visiting
 * each node in the tree is enough for what we're trying to do.
 * 如果我们直接操作这个AST，而不是创建一个单独的AST，  
 * 我们可能会在这里引入各种抽象。但对于我们想要做的事情来说，  
 * 仅访问树中的每个节点就足够了
 *
 * The reason I use the word "visiting" is because there is this pattern of how
 * to represent operations on elements of an object structure.
 * 我使用“访问”这个词是因为有一个如何在对象结构的元素上表示操作的模式。 
 *
 * Visitors
 * 访问者（Visitors ）
 * --------
 *
 * The basic idea here is that we are going to create a “visitor” object that
 * has methods that will accept different node types.
 * 基本思想是我们将创建一个“访问者”对象，该对象将包含接受不同节点类型的方法。  
 *  
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * When we traverse our AST, we will call the methods on this visitor whenever we
 * "enter" a node of a matching type.
 * 当我们遍历我们的AST时，我们将调用此访问者上的方法，每当我们“进入”一个匹配类型的节点时。  
 *  
 * In order to make this useful we will also pass the node and a reference to
 * the parent node.
 * 为了使这变得有用，我们还将传递节点和对父节点的引用。 
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * However, there also exists the possibility of calling things on "exit". Imagine
 * our tree structure from before in list form:
 * 然而，也存在“退出”时调用东西的可能性。想象一下我们之前的树结构以列表形式表示：  
 *  
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * As we traverse down, we're going to reach branches with dead ends. As we
 * finish each branch of the tree we "exit" it. So going down the tree we
 * "enter" each node, and going back up we "exit".
 * 当我们向下遍历时，我们将达到有死路的分支。当我们完成树的每个分支时，我们会“退出”它。因此，在向下遍历树时，我们“进入”每个节点，而在向上返回时，我们“退出”。  
 *  
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * In order to support that, the final form of our visitor will look like this:
 * 为了支持这一点，访问者的最终形式将如下所示：
 * 
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * Code Generation
 * 代码生成
 * ---------------
 *
 * The final phase of a compiler is code generation. Sometimes compilers will do
 * things that overlap with transformation, but for the most part code
 * generation just means take our AST and string-ify code back out.
 * 编译器的最后阶段是代码生成。有时，编译器会执行与转换重叠的操作，
 * 但大多数情况下，代码生成只是指将我们的AST转换回字符串形式的代码。  
 *  
 * 
 * Code generators work several different ways, some compilers will reuse the
 * tokens from earlier, others will have created a separate representation of
 * the code so that they can print nodes linearly, but from what I can tell most
 * will use the same AST we just created, which is what we’re going to focus on.
 * 代码生成器的工作方式各不相同，有些编译器会重用早期的令牌，而其他编译器则会创建代码的单独表示形式，
 * 以便它们可以线性地打印节点，但据我所知，大多数编译器将使用我们刚刚创建的相同的AST，这将是我们的重点。  
 *  
 * Effectively our code generator will know how to “print” all of the different
 * node types of the AST, and it will recursively call itself to print nested
 * nodes until everything is printed into one long string of code.
 * 实际上，我们的代码生成器将知道如何“打印”AST的所有不同节点类型，
 * 并且它将递归调用自身以打印嵌套节点，直到所有内容都被打印为一个长的代码字符串。 
 *  
 */

/**
 * And that's it! That's all the different pieces of a compiler.
 * 就是这样! 这就是编译器的所有不同部分。
 *
 * Now that isn’t to say every compiler looks exactly like I described here.
 * Compilers serve many different purposes, and they might need more steps than
 * I have detailed.
 * 这并不意味着每个编译器都与我这里描述的完全相同。  
 * 编译器服务于许多不同的目的，它们可能需要比我详细介绍的更多步骤。
 * 
 * But now you should have a general high-level idea of what most compilers look
 * like.
 * 但现在您应该对大多数编译器的外观有了大致的了解。  
 *
 * Now that I’ve explained all of this, you’re all good to go write your own
 * compilers right?
 * 在我解释了这一切之后，您就可以开始编写自己的编译器了吗？  
 *
 * Just kidding, that's what I'm here to help with :P
 * 开玩笑啦，我就是来帮忙的 :P  
 *
 * So let's begin...
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!
 *                                   分词器！
 * ============================================================================
 */

/**
 * We're gonna start off with our first phase of parsing, lexical analysis, with
 * the tokenizer.
 * 我们将从解析的第一阶段，即词法分析开始，使用分词器。  
 * 
 * We're just going to take our string of code and break it down into an array
 * of tokens.
 * 我们只需要将代码字符串分解成一组令牌（tokens）的数组。
 * 
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 * 
 * 这里的例子是一个简单的表达式，分词器会将其分解为多个令牌。  
 * 每个令牌都有一个类型（type）和一个值（value）。  
 * 在这个例子中，第一个令牌是一个类型为 'paren' 的左括号 '('。  
 * 后续令牌将代表 'add', 数字 '2', 'subtract', '4', '2' 等，直到右括号 ')' 为止。  
 * 这样，我们就得到了一个令牌数组，可以用于后续的语法分析阶段。
 */

// We start by accepting an input string of code, and we're gonna set up two
// things...
// 我们开始接受一个输入的代码字符串，并且我们将设置两个东西...
function tokenizer(input) {

  // A `current` variable for tracking our position in the code like a cursor.
  // 一个“current”变量，用于像光标一样跟踪我们在代码中的位置。
  let current = 0;

  // And a `tokens` array for pushing our tokens to.
  let tokens = [];

  // We start by creating a `while` loop where we are setting up our `current`
  // variable to be incremented as much as we want `inside` the loop.
  // 我们首先创建一个“while”循环，在该循环中，我们将设置“current”变量，使其在循环中按需要递增。
  //
  // We do this because we may want to increment `current` many times within a
  // single loop because our tokens can be any length.
  // 我们这样做是因为我们可能希望在单个循环中多次增加“current”，因为我们的tokens可以是任何长度。
  while (current < input.length) {

    // We're also going to store the `current` character in the `input`.
    let char = input[current];

    // The first thing we want to check for is an open parenthesis. This will
    // later be used for `CallExpression` but for now we only care about the
    // character.
    // 首先，我们要检查的是左括号。虽然它以后会被用于`CallExpression`，但现在我们只关心这个字符。  
    //
    // We check to see if we have an open parenthesis:
    // 我们检查是否有一个左括号：  
    if (char === '(') {

      // If we do, we push a new token with the type `paren` and set the value
      // to an open parenthesis.
      // 我们将一个新的类型为`paren`的token压入tokens数组，并将值设置为左括号。  
      tokens.push({
        type: 'paren',
        value: '(',
      });

      // Then we increment `current`
      // 然后我们增加`current`的值。  
      current++;

      // And we `continue` onto the next cycle of the loop.
      // 接着我们`continue`到循环的下一个周期。  
      continue;
    }

    // Next we're going to check for a closing parenthesis. We do the same exact
    // thing as before: Check for a closing parenthesis, add a new token,
    // increment `current`, and `continue`.
    // 接下来，我们将检查闭合的括号。我们执行的步骤与之前完全相同：
    // 检查闭合的括号，添加一个新的token，递增`current`，并使用`continue`。  
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // Moving on, we're now going to check for whitespace. This is interesting
    // because we care that whitespace exists to separate characters, but it
    // isn't actually important for us to store as a token. We would only throw
    // it out later.
    // 接下来，我们将检查空白字符。这很有趣，因为我们关心空白字符的存在，  
    // 因为它们用来分隔字符，但实际上我们并不需要将其作为token存储。  
    // 我们稍后只会忽略它。 
    // 
    // So here we're just going to test for existence and if it does exist we're
    // going to just `continue` on.
    // 因此，这里我们只是检查其是否存在，如果存在，我们只需`continue`继续下一个循环。
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // The next type of token is a number. This is different than what we have
    // seen before because a number could be any number of characters and we
    // want to capture the entire sequence of characters as one token.
    // 下一个token类型是数字。这与我们之前看到的不同，因为数字可能由多个字符组成，  
    // 我们希望将整个字符序列作为一个token捕获。
    // 
    //   (add 123 456)
    //        ^^^ ^^^
    //        Only two separate tokens
    //        只有两个独立的token
    //
    // So we start this off when we encounter the first number in a sequence.
    // 因此，当我们在一个序列中遇到第一个数字时，我们将开始处理。
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {

      // We're going to create a `value` string that we are going to push
      // characters to.
      // 我们将创建一个`value`字符串，并将字符推送到该字符串中。  
      let value = '';

      // Then we're going to loop through each character in the sequence until
      // we encounter a character that is not a number, pushing each character
      // that is a number to our `value` and incrementing `current` as we go.
      // 然后，我们将遍历序列中的每个字符，直到遇到非数字字符为止，  
      // 将每个数字字符推送到我们的`value`中，并在过程中递增`current`。
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // After that we push our `number` token to the `tokens` array.
      // 之后，我们将`number` token推送到`tokens`数组中。  
      tokens.push({ type: 'number', value });

      // And we continue on.
      // 然后我们继续下一个循环。 
      continue;
    }

    // We'll also add support for strings in our language which will be any
    // text surrounded by double quotes (").
    // 我们还将在我们的语言中添加对字符串的支持，字符串将由双引号（"）包围的任何文本组成。  
    // 
    //   (concat "foo" "bar")
    //            ^^^   ^^^ string tokens
    //                      字符串token 
    //
    // We'll start by checking for the opening quote:
    // 我们将首先检查开始引号：
    if (char === '"') {
      // Keep a `value` variable for building up our string token.
      // 保留一个`value`变量来构建我们的字符串token。
      let value = '';

      // We'll skip the opening double quote in our token.
      // 我们将跳过token中的开始双引号。
      char = input[++current];

      // Then we'll iterate through each character until we reach another
      // double quote.
      // 然后我们将遍历每个字符，直到我们达到另一个双引号。 
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // Skip the closing double quote.
      // 跳过结束双引号。  
      char = input[++current];

      // And add our `string` token to the `tokens` array.
      // 然后将我们的`string` token添加到`tokens`数组中。 
      tokens.push({ type: 'string', value });

      continue;
    }

    // The last type of token will be a `name` token. This is a sequence of
    // letters instead of numbers, that are the names of functions in our lisp
    // syntax.
    // 最后一种类型的token将是`name` token。这是一串字母而不是数字，表示我们LISP语法中的函数名。  
    //  
    //   (add 2 4)
    //    ^^^
    //    Name token
    //
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // Again we're just going to loop through all the letters pushing them to
      // a value.
      // 同样，我们只需遍历所有字母并将它们推送到一个值中。 
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // And pushing that value as a token with the type `name` and continuing.
      // 然后将具有`name`类型的该值作为token推送，并继续下一个循环。  
      tokens.push({ type: 'name', value });

      continue;
    }

    // Finally if we have not matched a character by now, we're going to throw
    // an error and completely exit.
    // 最后，如果到目前为止我们还没有匹配到任何字符，我们将抛出一个错误并完全退出。
    throw new TypeError('I dont know what this character is: ' + char);
  }

  // Then at the end of our `tokenizer` we simply return the tokens array.
  // 然后在“tokenizer”结束时，我们简单地返回tokens数组。
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!
 * ============================================================================
 */

/**
 * For our parser we're going to take our array of tokens and turn it into an
 * AST.
 * 对于我们的解析器，我们将把我们的token数组转换成一个AST（抽象语法树）。  
 * 
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// Okay, so we define a `parser` function that accepts our array of `tokens`.
// 现在，我们将定义一个`parser`函数，该函数接受我们的`tokens`数组作为输入。
function parser(tokens) {

  // Again we keep a `current` variable that we will use as a cursor.
  // 我们再次使用一个名为 `current` 的变量作为游标。
  let current = 0;

  // But this time we're going to use recursion instead of a `while` loop. So we
  // define a `walk` function.
  // 但这次我们将使用递归而不是 `while` 循环。因此我们定义一个名为 `walk` 的函数。  
  function walk() {

    // Inside the walk function we start by grabbing the `current` token.
    // 在 `walk` 函数内部，我们首先获取 `current` 位置的 token。
    let token = tokens[current];

    // We're going to split each type of token off into a different code path,
    // starting off with `number` tokens.
    // 我们将每种类型的 token 分成不同的代码路径，首先从 `number` 类型的 token 开始。 
    //  
    // We test to see if we have a `number` token.
    // 我们检查是否有一个 `number` 类型的 token。  
    if (token.type === 'number') {

      // If we have one, we'll increment `current`.
      // 如果我们有一个 `number` 类型的 token，我们将 `current` 加一。  
      current++;

      // And we'll return a new AST node called `NumberLiteral` and setting its
      // value to the value of our token.
      // 并且我们将返回一个名为 `NumberLiteral` 的新的 AST 节点，并将其值设置为 token 的值。
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // If we have a string we will do the same as number and create a
    // `StringLiteral` node.
    // 如果我们有一个字符串，我们将像处理数字一样创建一个 `StringLiteral` 节点。  
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // Next we're going to look for CallExpressions. We start this off when we
    // encounter an open parenthesis.
    // 接下来，我们将寻找 CallExpressions。当遇到左括号时，我们将开始这个过程。 
    if (
      token.type === 'paren' &&
      token.value === '('
    ) {

      // We'll increment `current` to skip the parenthesis since we don't care
      // about it in our AST.
      // 我们将递增 `current` 以跳过左括号，因为我们在 AST 中不需要它。 
      token = tokens[++current];

      // We create a base node with the type `CallExpression`, and we're going
      // to set the name as the current token's value since the next token after
      // the open parenthesis is the name of the function.
      // 我们创建一个基础节点，其类型为 `CallExpression`，我们将把当前 token 的值设置为名称，  
      // 因为左括号之后的下一个 token 是函数的名称。  
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // We increment `current` *again* to skip the name token.
      // 我们再次递增 `current` 以跳过名称 token。  
      token = tokens[++current];

      // And now we want to loop through each token that will be the `params` of
      // our `CallExpression` until we encounter a closing parenthesis.
      // 现在，我们想要遍历每个 token，这些 token 将是我们 `CallExpression` 的 `params`，  
      // 直到我们遇到右括号。  
      //
      // Now this is where recursion comes in. Instead of trying to parse a
      // potentially infinitely nested set of nodes we're going to rely on
      // recursion to resolve things.
      // 这里是递归发挥作用的地方。我们不会尝试解析可能无限嵌套的节点集，而是依靠递归来解决这些问题。  
      //
      // To explain this, let's take our Lisp code. You can see that the
      // parameters of the `add` are a number and a nested `CallExpression` that
      // includes its own numbers.
      // 为了解释这一点，让我们看看 Lisp 代码。你可以看到 `add` 的参数是一个数字和一个嵌套的 `CallExpression`，  
      // 它包括自己的数字。  
      //   (add 2 (subtract 4 2))
      //
      // You'll also notice that in our tokens array we have multiple closing
      // parenthesis.
      // 你还会注意到，在我们的 tokens 数组中，有多个关闭的括号。  
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //   ]
      //
      // We're going to rely on the nested `walk` function to increment our
      // `current` variable past any nested `CallExpression`.
      // 我们将依赖于嵌套的`walk`函数来增加我们的`current`变量，使其跳过任何嵌套的`CallExpression`。  
      // 
      // So we create a `while` loop that will continue until it encounters a
      // token with a `type` of `'paren'` and a `value` of a closing
      // parenthesis.
      // 创建一个`while`循环，直到它遇到一个类型为`'paren'`且值为闭合括号的令牌。 
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        // we'll call the `walk` function which will return a `node` and we'll
        // push it into our `node.params`.
        // 我们将调用`walk`函数，它将返回一个`node`，我们将它推入我们的`node.params`中。 
        node.params.push(walk());
        token = tokens[current];
      }

      // Finally we will increment `current` one last time to skip the closing
      // parenthesis.
      // 最后，我们将`current`增加1，以跳过闭合括号。  
      current++;

      // And return the node.
      // 返回节点。 
      return node;
    }

    // Again, if we haven't recognized the token type by now we're going to
    // throw an error.
    // 如果到现在我们还没有识别出令牌的类型，我们将抛出一个错误。  
    throw new TypeError(token.type);
  }

  // Now, we're going to create our AST which will have a root which is a
  // `Program` node.
  // 现在，我们将创建我们的AST，它的根是一个`Program`节点
  let ast = {
    type: 'Program',
    body: [],
  };

  // And we're going to kickstart our `walk` function, pushing nodes to our
  // `ast.body` array.
  // 我们将启动我们的`walk`函数，将节点推入我们的`ast.body`数组中。  
  //
  // The reason we are doing this inside a loop is because our program can have
  // `CallExpression` after one another instead of being nested.
  // 我们在一个循环中做这件事是因为我们的程序可以有相互独立的`CallExpression`，而不是嵌套的。  
  //  
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // At the end of our parser we'll return the AST.
  // 在解析器结束时，我们将返回AST。  
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!!
 * ============================================================================
 */

/**
 * So now we have our AST, and we want to be able to visit different nodes with
 * a visitor. We need to be able to call the methods on the visitor whenever we
 * encounter a node with a matching type.
 * 现在我们有了抽象语法树（AST），我们想要通过访问器来访问不同的节点。  
 * 当我们遇到与类型匹配的节点时，我们需要能够调用访问器上的方法。  
 *  
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// So we define a traverser function which accepts an AST and a
// visitor. Inside we're going to define two functions...
// 因此，我们定义了一个遍历器函数，该函数接受一个抽象语法树（AST）和一个访问器。  
// 在遍历器函数内部，我们将定义两个函数...  
function traverser(ast, visitor) {

  // A `traverseArray` function that will allow us to iterate over an array and
  // call the next function that we will define: `traverseNode`.
  // `traverseArray` 函数将允许我们遍历一个数组，并调用我们接下来将要定义的 `traverseNode` 函数。  
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // `traverseNode` will accept a `node` and its `parent` node. So that it can
  // pass both to our visitor methods.
  // `traverseNode` 将接受一个 `node`（节点）及其 `parent`（父节点），这样它就可以将两者都传递给我们的访问器方法。  
  function traverseNode(node, parent) {

    // We start by testing for the existence of a method on the visitor with a
    // matching `type`.
    // 我们首先测试访问器上是否存在一个与 `node.type` 相匹配的方法。 
    let methods = visitor[node.type];

    // If there is an `enter` method for this node type we'll call it with the
    // `node` and its `parent`.
    // 如果该节点类型存在 `enter` 方法，我们将使用 `node` 和其 `parent` 调用它。  
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    // Next we are going to split things up by the current node type.
    // 接下来，我们将根据当前节点类型进行拆分处理。
    switch (node.type) {

      // We'll start with our top level `Program`. Since Program nodes have a
      // property named body that has an array of nodes, we will call
      // `traverseArray` to traverse down into them.
      // 我们从顶级 `Program` 开始。由于 `Program` 节点具有一个名为 `body` 的属性，该属性包含一个节点数组，  
      // 我们将调用 `traverseArray` 来遍历它们。  
      // 
      // (Remember that `traverseArray` will in turn call `traverseNode` so  we
      // are causing the tree to be traversed recursively)
      // （请记住，`traverseArray` 将转而调用 `traverseNode`，因此我们将导致树被递归遍历）  
      case 'Program':
        traverseArray(node.body, node);
        break;

      // Next we do the same with `CallExpression` and traverse their `params`.
      // 接下来，我们对 `CallExpression` 执行相同的操作，并遍历其 `params`。  
      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      // In the cases of `NumberLiteral` and `StringLiteral` we don't have any
      // child nodes to visit, so we'll just break.
      // 在 `NumberLiteral` 和 `StringLiteral` 的情况下，我们没有要访问的子节点，因此我们将直接跳出。  
      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      // And again, if we haven't recognized the node type then we'll throw an
      // error.
      // 同样，如果我们没有识别出节点类型，我们将抛出一个错误。 
      default:
        throw new TypeError(node.type);
    }

    // If there is an `exit` method for this node type we'll call it with the
    // `node` and its `parent`.
    // 最后，如果该节点类型存在 `exit` 方法，我们将使用 `node` 和其 `parent` 调用它。  
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // Finally we kickstart the traverser by calling `traverseNode` with our ast
  // with no `parent` because the top level of the AST doesn't have a parent.
  // 最后，我们通过使用 ast 作为参数调用 `traverseNode` 来启动遍历器，  
  // 不传入 `parent` 参数，因为 AST 的顶层节点没有父节点。 
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              THE TRANSFORMER!!!
 * ============================================================================
 */

/**
 * Next up, the transformer. Our transformer is going to take the AST that we
 * have built and pass it to our traverser function with a visitor and will
 * create a new ast.
 * 下一步，我们进行转换。我们的转换器将采用我们构建的 AST，  
 * 并将其与访问者一起传递给遍历器函数，从而创建一个新的 AST。  
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// So we have our transformer function which will accept the lisp ast.
function transformer(ast) {

  // We'll create a `newAst` which like our previous AST will have a program
  // node.
  let newAst = {
    type: 'Program',
    body: [],
  };

  // Next I'm going to cheat a little and create a bit of a hack. We're going to
  // use a property named `context` on our parent nodes that we're going to push
  // nodes to their parent's `context`. Normally you would have a better
  // abstraction than this, but for our purposes this keeps things simple.
  //
  // Just take note that the context is a reference *from* the old ast *to* the
  // new ast.
  ast._context = newAst.body;

  // We'll start by calling the traverser function with our ast and a visitor.
  traverser(ast, {

    // The first visitor method accepts any `NumberLiteral`
    NumberLiteral: {
      // We'll visit them on enter.
      enter(node, parent) {
        // We'll create a new node also named `NumberLiteral` that we will push to
        // the parent context.
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    // Next we have `StringLiteral`
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // Next up, `CallExpression`.
    CallExpression: {
      enter(node, parent) {

        // We start creating a new node `CallExpression` with a nested
        // `Identifier`.
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // Next we're going to define a new context on the original
        // `CallExpression` node that will reference the `expression`'s arguments
        // so that we can push arguments.
        node._context = expression.arguments;

        // Then we're going to check if the parent node is a `CallExpression`.
        // If it is not...
        if (parent.type !== 'CallExpression') {

          // We're going to wrap our `CallExpression` node with an
          // `ExpressionStatement`. We do this because the top level
          // `CallExpression` in JavaScript are actually statements.
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // Last, we push our (possibly wrapped) `CallExpression` to the `parent`'s
        // `context`.
        parent._context.push(expression);
      },
    }
  });

  // At the end of our transformer function we'll return the new ast that we
  // just created.
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!
 * ============================================================================
 */

/**
 * Now let's move onto our last phase: The Code Generator.
 *
 * Our code generator is going to recursively call itself to print each node in
 * the tree into one giant string.
 */

function codeGenerator(node) {

  // We'll break things down by the `type` of the `node`.
  switch (node.type) {

    // If we have a `Program` node. We will map through each node in the `body`
    // and run them through the code generator and join them with a newline.
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');

    // For `ExpressionStatement` we'll call the code generator on the nested
    // expression and we'll add a semicolon...
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...because we like to code the *correct* way)
      );

    // For `CallExpression` we will print the `callee`, add an open
    // parenthesis, we'll map through each node in the `arguments` array and run
    // them through the code generator, joining them with a comma, and then
    // we'll add a closing parenthesis.
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );

    // For `Identifier` we'll just return the `node`'s name.
    case 'Identifier':
      return node.name;

    // For `NumberLiteral` we'll just return the `node`'s value.
    case 'NumberLiteral':
      return node.value;

    // For `StringLiteral` we'll add quotations around the `node`'s value.
    case 'StringLiteral':
      return '"' + node.value + '"';

    // And if we haven't recognized the node, we'll throw an error.
    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!THE COMPILER!!!!!!!!
 * ============================================================================
 */

/**
 * FINALLY! We'll create our `compiler` function. Here we will link together
 * every part of the pipeline.
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // and simply return the output!
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!YOU MADE IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// Now I'm just exporting everything...
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
