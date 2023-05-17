function greedy(arr) {
  const n = arr.length;
  let planes = 0;
  let maximum = 0;
  let current = 0;

  for (let i = 0; i < n; i++) {
    if (i > current) {
      if (maximum <= current) {
        return -1;
      }
      planes += 1;
      current = maximum;
    }
    maximum = Math.max(maximum, i + arr[i]);
  }

  return planes;
}

const arr = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(greedy(arr));
