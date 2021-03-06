async function(iter) {
	let result = 0;
	for await (const {
		value
	} of iter) {
		result += value;
	}
	return result;
}
