
export const bucket = new WeakMap();
export let activeEffect;

function effect(fn) {
    const effectFn = () => {
        cleanUp(effectFn)
        activeEffect = effectFn
        fn()
    }
    effectFn.deps = []
    effectFn()
}

function cleanUp(effectFn) {
    console.dir(effectFn);
    for (let i = 0; i < effectFn.deps.length; i++) {
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0;
}

export default effect;