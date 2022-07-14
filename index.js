import { reactive, effect } from './reactive/index.js'

const root = document.getElementById('root');

const data = {
    text: 'hello, world',
    show: true
}

const obj = reactive(data)

effect(() => {
    console.log('run Effect');
    root.textContent = obj.show ? obj.text : 'not'
})

window.obj = obj
// obj.show = true
// obj.text = '18'
