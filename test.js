console.log("1")

setTimeout(() => console.log("2"), 0)

console.log("3")

Promise.resolve("4").then((res) => console.log(res))

setTimeout(() => console.log("5"), 0)

setTimeout(() => console.log("6"), 0)

Promise.resolve("7").then((res) => res).then(res => console.log(res))

Promise.resolve("8").then((res) => res).then(res => console.log(res))

Promise.resolve("9").then((res) => res).then(res => console.log(res))

Promise.resolve("10").then((res) => res).then(res => console.log(res))


1
3
4
2
5
6
7
8
9
10