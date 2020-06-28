import {
    shallowMount
} from '@vue/test-utils';
import {
    expect
} from 'chai'
import Button from '@/packages/button/button.vue';
import Icon from '@/packages/icon';
console.log(Button, 'Button')
describe('Button.vue', () => {
    // TDD 根据用户行为
    it('1.测试button能否正常显示slot里面的内容', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'start-mini-button'
            }
        });
        expect(wrapper.text()).to.be.eq('start-mini-button')
    })
    it('2.测试icon传入是否正常显示', () => {
        const wrapper  = shallowMount(Button, {
            stubs: { // 替换功能
                'start-mini-icon': Icon
            },
            propsData: {
                icon: 'dit'
            }
        })
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-dit')
    })
    it('3.测试loading时 按钮是否时禁用状态', () => {
        const wrapper  = shallowMount(Button, {
            stubs: { // 替换功能
                'start-mini-icon': Icon
            },
            propsData: {
               loading: true 
            }
        })
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-loading');
        expect(wrapper.find('button').attributes('disabled')).to.eq('disabled');
    })
    it('4.测试按钮能否正常点击', () => {
        const wrapper  = shallowMount(Button)
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted('click').length).to.eq(1);
    })
    it('5.按钮传入position时能否正常显示', () => { // 测试样式
        const wrapper  = shallowMount(Button, {
            attachToDocument: true, // 将组件挂载到浏览器里面
            stubs: { // 替换功能
                'start-mini-icon': Icon
            },
            slots: {
                default: 'start-mini-ui'
            },
            propsData: {
               iconPosition: 'left',
               icon: 'edit'
            }
        })
        let ele = wrapper.vm.$el.querySelector('span');
        expect(getComputedStyle(ele).order).to.eq('2');
        wrapper.setProps({ // 设置props 必须要在下一个事件环去测试 (event loop)
            iconPosition: 'right'
        });
        return wrapper.vm.$nextTick().then(() => {
            expect(getComputedStyle(ele).order).to.eq('1');
        })
    })
})