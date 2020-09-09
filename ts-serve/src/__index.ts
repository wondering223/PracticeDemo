class Log {
  //   @decorate("TT")
  print(msg: string) {
    console.log(msg);
  }
}
function decorate(name: string) {
  return function (target: any, property: any, descriptor: any) {
    let oldValue = descriptor.value;
    descriptor.value = (msg: string) => {
      msg = name + " : " + msg;
      msg = msg.length % 2 == 1 ? msg + " " : msg;
      let len = msg.length;
      let pre = "*".repeat(len * 2) + "\n" + "*" + " ".repeat((len - 2) / 2);
      let end = pre.split("").reverse().join("");
      msg = pre + msg + end;

      return oldValue.call(null, msg);
    };
    return descriptor;
  };
}

// const dec = (name: string) => (target: any, property: any) => {
//   const old = target.prototype[property];
//   target.prototype[property] = (msg: string) => {
//     msg = name + " : " + msg;
//     msg = msg.length % 2 == 1 ? msg + " " : msg;
//     let len = msg.length;
//     let pre = "*".repeat(len * 2) + "\n" + "*" + " ".repeat((len - 2) / 2);
//     let end = pre.split("").reverse().join("");
//     msg = pre + msg + end;
//     old(msg);
//   };
// };
// dec("TT")(Log, "print");

// let logger = new Log();
// logger.print("hello world");
const anotation = (target: typeof Log, proterty: string, decorate: any) => {
  const descriptor = decorate("TT")(
    Log.prototype,
    proterty,
    Object.getOwnPropertyDescriptor(Log.prototype, proterty)
  );
  Object.defineProperty(Log.prototype, proterty, descriptor);
};
anotation(Log, "print", decorate);

let logger = new Log();
logger.print("hello world");

