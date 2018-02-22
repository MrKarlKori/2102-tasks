function getBriefStr(str) {
	let result = '';
	let counter = 0;

	for ( let i = 0; i <= str.length; i++ ) {
		if ( i === 0 || str[i] === str[i-1] ) {
			++counter;
		} else {
			result += str[i-1] + counter;
			counter = 1;
		}
	}

	return result.length >= str.length ? str : result;
}

console.log(getBriefStr('pppppppppsaaabbbbcccddAccDDDttUUUU'));