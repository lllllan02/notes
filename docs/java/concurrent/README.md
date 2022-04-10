---
# 这是页面的图标
icon: page

# 这是文章的标题
title: 常见面试题

# 设置作者
author: lllllan

# 设置写作时间
# time: 2020-01-20

# 一个页面只能有一个分类
category: Java

# 一个页面可以有多个标签
tag:
- Java 多线程

# 此页面会在文章列表置顶
# sticky: true

# 此页面会出现在首页的文章板块中
star: true

# 你可以自定义页脚
# footer: 
---



::: warning 转载声明

- [如何正确地停止一个线程？ - 王晓符 - 博客园 (cnblogs.com)](https://www.cnblogs.com/greta/p/5624839.html)
- [notify() 和 notifyAll() 有什么区别？_ConstXiong的博客-CSDN博客_notifyall](https://blog.csdn.net/meism5/article/details/90238268)

:::



## 如何停止一个线程



### stop

stop()方法以及作废，因为如果强制让线程停止有可能使一些清理性的工作得不到完成。另外一个情况就是对锁定的对象进行了解锁，导致数据得不到同步的处理，出现数据不一致的问题。

```java
public class MyThread extends Thread {
    private int i = 0;
    public void run(){
        super.run();
        try {
            while (true){
                System.out.println("i=" + i);
                i++;
                Thread.sleep(200);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

public class Run {
    public static void main(String args[]) throws InterruptedException {
        Thread thread = new MyThread();
        thread.start();
        Thread.sleep(2000);
        thread.stop();
    }
}
```



### interrupt

interrupt()方法的使用效果并不像for+break语句那样，马上就停止循环。调用interrupt方法是在当前线程中打了一个停止标志，并不是真的停止线程。

因此可以使用interrupt配合条件判断或者异常捕捉使用，当检查到线程被interrupt，即可退出循环，让线程结束。

```java
public class MyThread extends Thread {
    public void run(){
        super.run();

        while(true) {
            System.out.println(getName() + " is running");
            
            tru {
                sleep(1000);
            } catch(InterruptedException e) {
                System.out.println("被停止");
                break;
            }
        }

    }
}

public class Run {
    public static void main(String args[]) throws InterruptedException {
        Thread thread = new MyThread();
        thread.start();
        Thread.sleep(2000);
        thread.stop();
    }
}
```



## notify 和 notifyAll

[notify() 和 notifyAll() 有什么区别？_ConstXiong的博客-CSDN博客_notifyall](https://blog.csdn.net/meism5/article/details/90238268)

先解释两个概念。

- 锁池：获得锁的线程能够执行，没有获得锁的线程则在锁池中争夺这个锁。
- 等待池：某个线程获得锁之后，调用了 wait() 方法，则会进入等待池。进入等待池的线程不会去争夺锁。



区别：notify() 方法随机唤醒对象的等待池中的一个线程，进入锁池；notifyAll() 唤醒对象的等待池中的所有线程，进入锁池。

只是调入锁池，但是一定只有一个线程能够获得锁并执行。



## sleep 和 wait

[sleep和wait的区别](1/5/#_5-2-sleep方法)



sleep是Thread的方法，可以在任意位置使用，让线程睡眠。

wait是Object的方法，必须在同步块/同步方法中使用。wait方法是让当前获得锁的线程释放锁，因此必须在同步块/同步方法中使用，确保该线程获得了锁。

```java
synchronized (lock) {
    try {
        System.out.println("before wait");
        
        lock.wait();

        // 进入等待被唤醒之后，会从这里重新执行
        System.out.println("after wait");
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
}
```



## volatile ★

[volatile](2/8/)



### 内存可见性

因为每个线程在自己私有的工作内存中对共享变量有一份拷贝（类的（静态）成员变量），所以当一个线程试图修改一个成员变量的时候，其实只修改了自己工作内存中的拷贝，其他线程不能知道这次修改。这就是不可见性

使用 volatile 修饰以后，当一个线程试图修改一个成员变量，会同时修改主内存中的值；当其他线程试图获取这个成员变量，也会到主内存中重新读取。这就是保证可见性



### 禁止重排序

计算机在执行程序时，为了提高性能，编译器和处理器常常会对指令做重排。

但是在多线程下，这个重排序可能会导致一些问题，见 [禁止重排序 | 多线程下重排序的危害](2/8/#_2-2-禁止重排序)

使用 volatile 修饰以后，会对重排序做一定的限制。