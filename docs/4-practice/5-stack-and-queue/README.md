---
# 这是页面的图标
icon: page

# 这是文章的标题
title: 栈与队列

# 设置作者
author: lllllan

# 设置写作时间
# time: 2020-01-20

# 一个页面只能有一个分类
category: 刷题

# 一个页面可以有多个标签
tag:

# 此页面会在文章列表置顶
# sticky: true

# 此页面会出现在首页的文章板块中
star: true

# 你可以自定义页脚
# footer: 

---



## 一、栈



### 1.1 [232. 用栈实现队列 - 力扣](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

> ![image-20220303203442224](README.assets/image-20220303203442224.png)

```java
import java.util.Stack;

class MyQueue {

    Stack<Integer> in, out;

    public MyQueue() {
        in = new Stack<>();
        out = new Stack<>();
    }

    public void push(int x) {
        in.add(x);
    }

    public void CheckOut() {
        if (out.size() == 0) {
            while (in.size() > 0) out.add(in.pop());
        }
    }

    public int pop() {
        CheckOut();
        return out.pop();
    }

    public int peek() {
        CheckOut();
        return out.peek();
    }

    public boolean empty() {
        return in.empty() && out.empty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
```



### 1.2 [20. 有效的括号 - 力扣](https://leetcode-cn.com/problems/valid-parentheses/)

> ![image-20220303204717266](README.assets/image-20220303204717266.png)

```java
import java.util.Stack;

class Solution {
    public boolean isValid(String s) {
        Stack<Character> st = new Stack<>();
        for (int i = 0, len = s.length(); i < len; ++i) {
            char c = s.charAt(i);
            if (c == '(' || c == '[' || c == '{') st.add(c);
            else {
                if (st.size() > 0) {
                    if (st.peek() == '(' && c == ')') st.pop();
                    else if (st.peek() == '[' && c == ']') st.pop();
                    else if (st.peek() == '{' && c == '}') st.pop();
                    else st.add(c);
                } else st.add(c);
            }
        }
        return st.empty();
    }
}
```



### 1.3 [1047. 删除字符串中的所有相邻重复项 - 力扣](https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/)

> ![image-20220303205641348](README.assets/image-20220303205641348.png)

```java
import java.util.Stack;

class Solution {
    public String removeDuplicates(String s) {
        Stack<Character> st = new Stack<>();
        for (int i = 0, len = s.length(); i < len; ++i) {
            char c = s.charAt(i);
            if (st.size() > 0 && st.peek() == c) {
                st.pop();
            } else st.add(c);
        }

        StringBuilder sb = new StringBuilder("");
        while (st.size() > 0) sb.append(st.pop());
        return sb.reverse().toString();
    }
}
```



### 1.4 [150. 逆波兰表达式求值 - 力扣](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)

> ![image-20220303210500142](README.assets/image-20220303210500142.png)

```java
import java.util.Stack;

class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> st = new Stack<>();
        for (String s : tokens) {
            if (s.equals("+")) {
                st.add(st.pop() + st.pop());
            } else if (s.equals("-")) {
                int a = st.pop(), b = st.pop();
                st.add(b - a);
            } else if (s.equals("*")) {
                st.add(st.pop() * st.pop());
            } else if (s.equals("/")) {
                int a = st.pop(), b = st.pop();
                st.add(b / a);
            } else {
                st.add(Integer.valueOf(s));
            }
        }
        return st.pop();
    }
}
```



## 二、队列



### 2.1 [225. 用队列实现栈 - 力扣](https://leetcode-cn.com/problems/implement-stack-using-queues/)

> ![image-20220303204230564](README.assets/image-20220303204230564.png)

```java
import java.util.LinkedList;
import java.util.Queue;

class MyStack {
    Queue<Integer> A, B;

    public MyStack() {
        A = new LinkedList<>();
        B = new LinkedList<>();
    }

    public int getTop(Queue<Integer> a, Queue<Integer> b) {
        while (a.size() > 1) {
            b.add(a.poll());
        }
        return a.peek();
    }

    public void push(int x) {
        if (B.size() > 0) B.add(x);
        else A.add(x);
    }

    public int pop() {
        if (A.size() > 0) {
            getTop(A, B);
            return A.poll();
        } else {
            getTop(B, A);
            return B.poll();
        }
    }

    public int top() {
        if (A.size() > 0) {
            int x = getTop(A, B);
            B.add(A.poll());
            return x;
        } else {
            int x = getTop(B, A);
            A.add(B.poll());
            return x;
        }
    }

    public boolean empty() {
        return A.isEmpty() && B.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */
```



### 2.2 [239. 滑动窗口最大值 - 力扣](https://leetcode-cn.com/problems/sliding-window-maximum/)

> ![image-20220303231545970](README.assets/image-20220303231545970.png)

```java
import java.util.Deque;
        import java.util.LinkedList;

class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        Deque<Integer> deque = new LinkedList<>();

        for (int i = 0; i < k; ++i) {
            while (!deque.isEmpty() && nums[i] > deque.peekLast()) deque.pollLast();
            deque.addLast(nums[i]);
        }

        int[] ans = new int[n - k + 1];
        ans[0] = deque.peekFirst();
        for (int i = k; i < n; ++i) {
            while (!deque.isEmpty() && nums[i] > deque.peekLast()) deque.pollLast();
            deque.addLast(nums[i]);

            if (nums[i - k] == deque.peekFirst()) deque.pollFirst();
            ans[i - k + 1] = deque.peekFirst();
        }
        return ans;
    }
}
```



### 2.3 [347. 前 K 个高频元素 - 力扣](https://leetcode-cn.com/problems/top-k-frequent-elements/)

> ![image-20220303232418442](README.assets/image-20220303232418442.png)

```java
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        PriorityQueue<Map.Entry<Integer, Integer>> Q = new PriorityQueue<>((o1, o2) -> o1.getValue() - o2.getValue());
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            Q.add(entry);
            if (Q.size() > k) Q.poll();
        }

        int[] ans = new int[k];
        for (int i = k; i > 0; --i) {
            ans[i - 1] = Q.poll().getKey();
        }
        return ans;
    }
}
```
