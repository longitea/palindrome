document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var input = document.getElementById("myInput").value;
  var result = document.getElementById("result");

  if (input === "") {
    result.textContent = "Input is empty.";
  } else {
    var partitions = partition(input);
    result.textContent = JSON.stringify(partitions, null, 2);
  }
});

// Your existing functions go here

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function partition(s) {
  let result = [];
  backtrack(s, 0, [], result);
  return result;
}

function backtrack(s, start, current, result) {
  if (start === s.length) {
    result.push([...current]);
    return;
  }
  for (let end = start; end < s.length; end++) {
    if (isPalindrome(s.substring(start, end + 1))) {
      current.push(s.substring(start, end + 1));
      backtrack(s, end + 1, current, result);
      current.pop();
    }
  }
}
