async function(foo) {
	const [bar] = await foo();
	return bar;
}
