//1
//(вывод на лист)
console.log('hi')

for(var i=0;i<8;i++){
    for(var j=0;j<i;j++){
        document.write('#');
    }
    document.write('<br/>');
}

// 2
for(var i=1;i<101;i++){
    if(i%3==0 & i%5==0) {
        console.log('FizzBuzz')
    } else if (i%3==0){
        console.log('Fizz')
    } else if (i%5==0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
    
}

// 3
var a='#  #  #  # '
for(var i=1;i<9;i++){ 
    if (i%2==0) {
        document.write(a)
        document.write('<br/>')
    } else {

        document.write(' '+'#  #  #  # ')
        document.write('<br/>')
    }
}
