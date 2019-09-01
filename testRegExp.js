var str = '14klsj4_75 ji';

// console.log(str.match(/\D/));
//[ 'k', index: 2, input: '14klsj475', groups: undefined ]

// console.log(str.match(/\D/g));
// console.log(str.match(/\d/g));
// console.log(str.match(/[0-9]/g));
// console.log(str.match(/[^0-9]/g));
// [ 'k', 'l', 's', 'j' ]
// [ '1', '4', '4', '7', '5' ]
// [ '1', '4', '4', '7', '5' ]
// [ 'k', 'l', 's', 'j' ]

// console.log(str.match(/\w/));
// console.log(str.match(/\w/g)); 
// [ '1', index: 0, input: '14klsj4_75 ji', groups: undefined ]
// [ '1', '4', 'k', 'l', 's', 'j', '4', '_', '7', '5', 'j', 'i' ]

// console.log(str.match(/\w/g));
// console.log(str.match(/\W/g));
// [ '1', '4', 'k', 'l', 's', 'j', '4', '_', '7', '5', 'j', 'i' ]
// [ ' ' ]

// console.log(str.match(/\s/g));
// console.log(str.match(/\S/g));
// [ ' ' ]
// [ '1', '4', 'k', 'l', 's', 'j', '4', '_', '7', '5', 'j', 'i' ]

// testQQRegExp
// console.log(/^[1-9][0-9]{5,10}/.test('4812354785464647'));
// console.log(/\d{6,10}/.test('163643544244'))