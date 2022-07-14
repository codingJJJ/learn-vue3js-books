import { bucket, activeEffect } from './effect.js'

function reactive(data) {
    return new Proxy(data, {
        get(target, key) {
            track(target, key)
            return Reflect.get(target, key)
        },
        set(target, key, value) {
            const flag = Reflect.set(target, key, value)
            trigger(target, key)
            return flag
        }
    })
}

function track(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, depsMap = new Map())
    }
    let deps = depsMap.get(key);
    if (!deps) {
        depsMap.set(key, deps = new Set())
    }
    if (activeEffect) {
        deps.add(activeEffect)
        activeEffect.deps.push(deps)
    }
}

function trigger(target, key) {
    const depsMap = bucket.get(target);
    if (!depsMap) return
    const deps = depsMap.get(key)
    new Set(deps).forEach(fn => fn?.());
}
export default reactive