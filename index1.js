// const array = [

//     {

//         id: 1,

//         parent_id: 0,

//         name: "四川省"

//     },

//     {

//         id: 2,

//         parent_id: 0,

//         name: "广东省"

//     },

//     {

//         id: 3,

//         parent_id: 0,

//         name: "江西省"

//     },

//     {

//         id: 5,

//         parent_id: 1,

//         name: "成都市"

//     },

//     {

//         id: 6,

//         parent_id: 5,

//         name: "锦江区"

//     },

//     {

//         id: 7,

//         parent_id: 6,

//         name: "九眼桥"

//     },

//     {

//         id: 8,

//         parent_id: 6,

//         name: "兰桂坊"

//     },

//     {

//         id: 9,

//         parent_id: 2,

//         name: "东莞市"

//     },

//     {

//         id: 10,

//         parent_id: 9,

//         name: "长安镇"

//     },

//     {

//         id: 11,

//         parent_id: 3,

//         name: "南昌市"

//     }

// ]


function formatDataToTree(arr) {
    const parents = arr.filter(i => i.parent_id === 0)
    const children = arr.filter(i => i.parent_id !== 0)

    return dataToTree(parents, children)

    function dataToTree(parents, children) {
        const needToDelChildrenSign = [];
        parents.forEach((p => {
            children.forEach((c, i) => {
                if (p.id === c.parent_id) {
                    needToDelChildrenSign.push(i)
                }
            })
        }))

        const currentParents = children.filter(item => needToDelChildrenSign.includes(item))
        const currentChildren = children.filter(item => !needToDelChildrenSign.includes(item))
        dataToTree(currentParents, currentChildren)
        return parents

    }

    return parents
}

// console.log(formatDataToTree(array));

// Number("1,234,567.456,78".replace(/,/g, i => '')).toFixed(3)

/**
 * 将数字用千分位分割
 * 如 1234.56789 => 123,4.567,89
 *    1234 => 123,4
 */
const num = 1234.56789

function formatNumer(num) {
    const [left, right] = num.toString().split(".");
    const resLeft = reverse(replace(reverse(left)));
    if (right) {
        return resLeft + "." + replace(right)
    }
    return resLeft
}

function reverse(str) {
    return str.split("").join("")
}

function replace(str) {
    return str.replace(/\d{3}/g, s => s + ",")
}

console.log(formatNumer(num));