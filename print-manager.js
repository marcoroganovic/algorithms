class PrintManager {
  constructor() {
    this.queue = [];
  }

  queuePrintJob(document) {
    this.queue.push(document);
  }

  run() {
    while(this.queue.length) {
      this.print(this.queue.shift());
    }
  }


  print(document) {
    console.log(document);
  }
}

let printManager = new PrintManager();
printManager.queuePrintJob("First Document");
printManager.queuePrintJob("Second Document");
printManager.queuePrintJob("Third Document");
printManager.run();
