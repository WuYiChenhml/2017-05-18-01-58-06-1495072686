module.exports = function main() {
  var length = string.length;
  var num = Number(string);
  var result;
  for(var i = length - 1; i < 0; i--)
  {
    result =  Math.floor(num / Math.pow(10,i));
    num = num - Math.floor(num / Math.pow(10,i)) * Math.pow(10,i);
  }
return result;
}
