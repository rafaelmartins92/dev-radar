var code = 'abc123'
function foo(){
  code = '123bcd'
  return
}
foo()
console.log(code)