# Eggheadio Introduction To Reactive Programming

Learnings and annotations from https://egghead.io/courses/introduction-to-reactive-programming

1. [Understand reactive programming using RxJs](./01/index.js)

    ```bash
    $ node 01
    ```
2. [Use an event stream of double clicks](./02/index.js)

    ```bash
    $ npx live-server 02
    ```
3. [Why hoose RxJs]('./03/index.js')

    Key takeaway:

    Why should one use event streams?

    > Event streams allow one to specify the dynamic behaviour of a value
    > completely at the time of declaration.

    ^ this sounds awfully similar to *determinism* in state charts

    ```bash
    $ node 03
    ```
4. [Async requests and responses](./04/index.js)

    Takeaway:

    Use `Rx.Observable.flatMap` to flatten nested Observables and allow for
    working with only a single level of events / values in a stream.

    ```bash
    $ npx live-server 04
    ```
5. [Render on the Dom](./05/index.js)

    ```bash
    $ npx live-server 05
    ```
6. [Send new requests from refresh clicks](./06/index.js)

    Takeaways:

    - streams don't do anything until they are subscribed to
    - `merge` will take two streams and create a new stream of those streams:

        ```
        ----a-----b-------c--->
        s--------------------->
                 merge
        s---a-----b-------c--->
        ```

        http://rxmarbles.com/#merge

    ```bash
    $ npx live-server 06
    ```
