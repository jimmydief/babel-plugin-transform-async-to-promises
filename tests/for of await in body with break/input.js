async function(iter) {
	var result = 0;
	for (var value of iter) {
		result += await value;
		if (result > 10)
			break;
	}
	return result;
}
