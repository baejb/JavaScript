// 2.Variable 
// let (added in ES6)
 

// var 사용금지
// var hoisting (move declaration from bottom to top )

//block scope {} 을 사용하여 안에 선언하면 블럭 밖에서는 블럭
//안의 내용을 볼 수 없게 됨
//블럭 밖에서 선언한 변수들은 글로벌 변수 , 어디서든 접근 가능 

//const 한번 할당하면 값이 바뀌지 않음 
//immutable 데이터 <-> mutable : 값이 변경 될 수 있는 데이터 (let)
// 이점으로는 보안성 , thread safety, 코드변경 유지보수 이점 

// 변수 타입으로는 primitive 타입 ( 더이상 쪼개질 수 없는)
// object 타입 

//number 숫자  , infinity 양수를 0으로 나눴을 때 
// negativeinfinity 음수를 0으로 나눴을 때 
// NaN string 을 0으로 나눴을 때 

//String ${} 사용해서 + + 안써도 됨 template literals 

// Symbol 고유한 식별자가 필요할 때 , 우선순위 주고싶을 때 

// Dynamic typing 선언할 때 타입 설정을 안하므로 런타임때 타입이 결정남. 따라서 런타임때 에러가 발생 할 수 있음  .