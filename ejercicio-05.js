const tall = 160
const tallInMeters = 1.59
const weight = 77.50
const upperRoundTall = Number(tallInMeters.toFixed(1)).toPrecision(3)/** other way to do it -> Number(Math.round(tallInMeters+'e1')+'e-1')*/
const lowerRoundTall = Number(tallInMeters.toString().substring(0,3)).toPrecision(3)
const isMaxValueEqualsToMaxJsValue = (Number.MAX_VALUE + 1) === Number.MAX_VALUE

console.log(isMaxValueEqualsToMaxJsValue)