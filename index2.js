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

// function test(arr) {
//     const data = JSON.parse(JSON.stringify(arr))

//     let cache = {}
//     let result = []
//     let unarr = []

//     data.forEach(item => {
//         item.children = []
//         cache[item.id] = item

//         if (item.parent_id === 0) {
//             result.push(item)
//         } else {
//             unarr.push(item)
//         }
//     });

//     unarr.forEach(item => {
//         const parent_id = item.parent_id
//         cache[parent_id].children.push(item)
//     })

//     return result
// }

// const a = test(array)
// console.log(a)

// 1234.56789 "123,4.567,89"

let a = 123456

function test(num) {
    const strArr = String(a).split(".")

    let n, m
    n = parseInt(strArr[0].length / 3)
    m = strArr[0].length % 3

    let str = ""
    if (m === 0) {
        for (let i = 0; i < n; i++) {
            str += `${strArr[0].slice(i * 3, i * 3 + 2)},`
        }
    } else {
        for (let i = 0; i < n + 1; i++) {

        }
    }
    return str
}
let b = test(a)
console.log(b)