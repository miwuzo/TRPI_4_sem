let pr = new Promise((res, rej) => {
    rej('ku');
});
pr
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5));
let pr1 = new Promise((res, rej) => {
    setTimeout(() => res(21), 3000);
});
pr1.then((result) => {
    console.log(result);
    return result;
})
    .then((result => {
    console.log(result * 2);
}));
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(21), 5000);
    });
    let result = await promise;
    console.log(result);
    result *= 2;
    console.log(result);
}
f();
