function devide() 
{
	console.log('===============================')
}

let a = "my-short-string"
	function camelize(str)
	{
		let newStr = str.split('-')
		for (let i = 1; i < newStr.length; i++) 
		{
			newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1)
		}
		str = newStr.join('')
		console.log(str)
	}
	camelize(a);