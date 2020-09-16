/* 自定义插件 */
import filterHandler from 'Filter'
import directiveHandler from 'Directive'
// import directiveHandler from '@/directive'
const myPlugin = {
    install(Vue){
        filterHandler(Vue)
        directiveHandler(Vue)
    }
    
}

export default myPlugin