
let Teams = {"aaiec": 400,
"aaiwc": 60,
"qai": 200,
"poc": 100,
"gtm": 50,
"hr": 10
};
keysSorted=Object.keys(Teams).sort((a,b) => Teams[b]-Teams[a]);
console.log(keysSorted);