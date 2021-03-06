async function(matrix) {
	var result = 0;
	outer: for (var row of matrix) {
		inner: for (var cell of row) {
			const value = await cell;
			if (value > 10)
				continue inner;
			result += value;
			if (result < 0)
				continue outer;
		}
	}
	return result;
}
