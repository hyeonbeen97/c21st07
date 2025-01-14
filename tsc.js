var Foo = /** @class */ (function () {
    function Foo() {
        Foo.instanceCounter++;
    }
    Foo.instanceCounter = 0;
    return Foo;
}());
var foo1 = new Foo();
var foo2 = new Foo();
var foo3 = new Foo();
console.log(Foo.instanceCounter);
