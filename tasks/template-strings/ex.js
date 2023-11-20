function upper(strings,...values) {
	var res = ""; 
	for(let i = 0; i < strings.length; i++ ) {
		res += strings[i];
		values[i] ? res+=`${values[i].toUpperCase()}` : ""
	}
	return res
}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
