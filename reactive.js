import { backut, effectFn } from "./effect.js";

export default (obj) => {
    return new Proxy(obj, {
        get(target, key) {
            backut.add(effectFn)
            return Reflect.get(target, key)
        },
        set(target, key, value) {
            const flag = Reflect.set(target, key, value)
            backut.forEach(fn => {
                fn()
            })
            return flag
        }
    })
}