function solution(n){
  var sum = 0; n--;
  for (;n > 0; n--){
    if (n % 3 === 0 || n % 5 === 0)
    sum += n; 
  }
  return sum;
}
