const fruits = {
    'banana': 2,
    'grape': 3,
    'apple': 1,
};

for (const key of fruits) {
    const qty = fruits[key];
    console.log(key, ': ', qty);
}