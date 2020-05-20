'use strict'
function devide() 
{
	console.log('===============================')
}

var styles =['Jazz', 'Blues']
styles.push('Rock-n-roll');
styles[styles.length-2] = 'Classic'
styles.splice(0, 1)
console.log(styles)
styles.unshift('Rap','Reggі')
console.log(styles)
devide()