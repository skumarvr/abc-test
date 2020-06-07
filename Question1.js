const users = [
    {
        id: 1,
        name: 'brain',
    },
    {
        id: 2,
        name: 'john',
    },
    {
        id: 3,
        name: 'brain',
        age: 30
    },
    {
        id: 4,
        age: 40
    }
]

function addObject(dictObj, key, val)
{
    if(dictObj[key] == null) {
        dictObj[key] = [];
    }

    dictObj[key].push(val);
    // console.log(JSON.stringify(dictObj));
}

function groupByKey(objects) {
    var groupedObj = new Object();

    for (var obj of objects) {
        var objName = obj.name || 'no_name';
        addObject(groupedObj, objName, obj);
    }

    return groupedObj;
}

var retVal = groupByKey(users);
console.log(retVal);
