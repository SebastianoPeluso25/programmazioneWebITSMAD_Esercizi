const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

function printItem(index) {
  if (index < items.length) {
    console.log(items[index]);
    setTimeout(() => printItem(index + 1), 1000);
  }
}

printItem(0);