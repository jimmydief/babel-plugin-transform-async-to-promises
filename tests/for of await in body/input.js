async function(iter) {
	var result = 0;
	for (var value of iter)
		result += await value;
	return result;
}
