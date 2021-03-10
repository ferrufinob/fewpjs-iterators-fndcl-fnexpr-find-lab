function superbowlWin(arr) {
  const win = arr.find((item) => item.result === "W");
  return win ? win.year : undefined;
}
