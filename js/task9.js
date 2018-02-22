function checkStrings(str1, str2) {
	if ( (str1.length !== str2.length) || str1 === '' || str2 === '' ) return false;

	let firstIndex = 0;
	let secondStrLength = 0;

	for ( let i = 0; i < str2.length; i++ ){
		if ( str2[i] !== str1[firstIndex] ) {
			firstIndex = 0;
			secondStrLength = 0;
			continue;
		} else {
			firstIndex++;
			secondStrLength++;
		}
	}

	return isSubstring(str1, str2.slice(-secondStrLength) + str2.slice(0, str2.length - secondStrLength));
}

function isSubstring(str1, str2) {
	return str1.indexOf(str2) !== -1 ? true : false;
}