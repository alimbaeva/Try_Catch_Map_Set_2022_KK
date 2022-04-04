try {
    greet();
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
} finally {
    console.log("This is finally content")
}

console.log('hello-1');

// =========================


try {
    greet2();
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
} finally {
    console.log("This is finally content-2")
}

console.log('hello-2');

function greet2() {
    console.log("function greet-2 ")
}

// =====================


const user = { name: "Asel" };

try {
    if (!user.email) {
        throw new SyntaxError("User does not have an email");
    }
} catch (error) {
    console.log(error.message)
}








let num = [100, 200, 300, 400];

let x, y, t, z;

[x, y, t, z] = num;
console.log(x, y, t, z);

// =================

let num2 = [100, 200, 300, 400, 500, 600, 700];

let x2, y2, t2;

[x2, y2, t2, ...rest] = num2;
console.log(x2, y2, t2, rest);

// =================

let user3 = {
    name3: 'Jone',
    age: 20,
    location: "NY",
    isMarried: true,
    phone: "+1234567890"
};

// let name = user3.name3;

const { name3, age, ...rest2 } = user3;

console.log(name3)
console.log(age)
console.log(rest2)