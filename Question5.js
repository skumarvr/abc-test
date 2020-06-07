// 'this' keyword refers to the object it belongs to. Within a method, 'this' refers to the owner object.

var helloWorld = {
    greetings: 'Hello',
    print : function(name) {
        console.log(this.greetings + ' ' + name + '!!!');
    }
};

helloWorld.print('Question_5');


