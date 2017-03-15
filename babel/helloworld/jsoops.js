(function (){

    var Grand = function(cParam1){
        this.name = "grand";
        console.log("In Grand constructor", cParam1, this.name);
    }
    Grand.prototype.constructor = Grand;
    Grand.prototype.test = function(){
        console.log("In Grand.test method");
    }

    var Parent = function(cParam1, cParam2){
        this.name = "parent";
        Grand.prototype.constructor.call(this, cParam1);
        this.cParam2 = cParam2;
        console.log("In Parent constructor", cParam1, cParam2, this.name);
    }
    Parent.prototype.constructor = Parent;
    Parent.prototype.test = function(){
        Grand.prototype.test.call(this);
        console.log("In Parent.test method");
    }

    var Child = function(cParam1, cParam2, cParam3){
        this.name = "child";
        Parent.prototype.constructor.call(this, cParam1, cParam2);
        this.cParam3 = cParam3;
        console.log("In Child constructor", cParam1, cParam2, cParam3, this.name);
    }
    Child.prototype.constructor = Child;
    Child.prototype.test = function(){
        Parent.prototype.test.call(this);
        console.log("In Child.test method");
    }

    var childInstance = new Child("1", "2", "3");
    childInstance.test();

})();
