function upper(strings, ...values) {
    var str = "";
    console.log(strings);
    console.log([...values])
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
            str += String(values[i - 1].toUpperCase())
        }
        str += strings[i]
    }
    return str;
}

var name = "kyle",
    twitter = "getify",
    topic = "JS Recent Parts";

console.log(
    upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
    "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);

upper`Hello ${name} (@${twitter}), welcome to ${topic}!`