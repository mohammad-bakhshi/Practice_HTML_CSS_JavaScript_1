var flattenArray = function(data) {
	return data.reduce(function iter(r, a) {
		if (a === null) {
			return r;
		}
		if (Array.isArray(a)) {
			return a.reduce(iter, r);
		}
		if (typeof a === 'object') {
			return Object.keys(a).map(k => a[k]).reduce(iter, r);
		}
		return r.concat(a);
	}, []);
}

let data=[10, [25, 13], [14, [55]], 2] ;

let answer=flattenArray(data);

console.log(flattenArray(answer));