const obj = {
    j_vas: {
        s_v_g: [{ _s_g_s: [1, 2, 3, { s_s: 3 }] }],
        _javasc: {
            m1: () => { }
        }
    }
}



function objectToUpperCase(obj) {
    const isObject = isOriginObject(obj);
    if (isObject) {
        const isArray = Array.isArray(obj)
        if (isArray) {
            return obj.map(objectToUpperCase)
        } else {
            const newObject = {}
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const value = obj[key]
                    newObject[camelToUpperCase(key)] = objectToUpperCase(value)
                }
            }
            return newObject
        }
    } else {
        return obj
    }
}

function isOriginObject(v) {
    return typeof v === 'object' && v !== null
}

function camelToUpperCase(str) {
    return str.replace(/_[a-z]/g, s => s[1].toUpperCase())
}


console.log(objectToUpperCase(obj.j_vas.s_v_g));

