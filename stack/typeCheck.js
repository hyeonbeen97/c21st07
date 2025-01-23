
const myA = {
    aa: 10,
    rr: [20, 21, 22, 23, { gender: ["man", "woman"] }],
    y: 30,
    gg: [40, 41, 42, 43, 44],
    kk: [50, 51, 52, 53],
    ggd: { name: "zard", address: ["Tokyo", "Ansan"] }
}
const arrayFunc = item => {
    for (let itemValue of item) {
        checkType(itemValue);
    }
}
const objectFunc = item => {
    for (let key in item) {
        checkType(item[key]);
    }
}
const primitiveFunc = item => {
    console.log(item);
}
const checkType = item => {
    if (typeof item == "object") {
        if (Array.isArray(item)) {
            arrayFunc(item);
        } else {
            objectFunc(item);
        }
    } else {
        primitiveFunc(item);
    }
}

checkType(myA);

/*

myA.forEach((v) => {
    if (typeof v == "object") {
        if (Array.isArray(v)) {
            for (let value of v) {
                if (Array.isArray(value)) {
                    for (let value2 of value) {
                        console.log(value2)
                    }
                } else {
                    console.log(value)
                }


            }
        } else {
            for (let keyName in v) {
                console.log(keyName)
                console.log(v[keyName])
            }

        }
    } else {
        console.log(v)
    }
})*/