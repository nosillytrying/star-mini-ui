import {
    shallowMount
} from '@vue/test-utils';
import {
    expect
} from 'chai'

import starMiniRow from '@/packages/star-mini-row';
import starMiniCol from '@/packages/star-mini-col';

describe('row.vue', () => {
    it('1.测试gutter是否ok?', async () => {
        let wrapper = shallowMount(starMiniRow, {
            attachToDocument: true,
            stubs: {
                'star-mini-col': starMiniCol
            },
            slots: {
              default: '<star-mini-col></star-mini-col>'
            },
            propsData: {
                gutter: 20
            }
        })
        let row = wrapper.vm.$el;
        expect(getComputedStyle(row).marginLeft).to.eq('-10px');
        expect(getComputedStyle(row).marginRight).to.eq('-10px');
        await wrapper.vm.$nextTick();
        let col = row.querySelector('.star-mini-col');
        expect(getComputedStyle(col).paddingLeft).to.eq('10px');
        expect(getComputedStyle(col).paddingLeft).to.eq('10px');
    })
    it('2.测试justify属性?', async () => {
        let wrapper = shallowMount(starMiniRow, {
            attachToDocument: true,
            stubs: {
                'star-mini-col': starMiniCol
            },
            slots: {
              default: `star-mini-col`
            },
            propsData: {
                justify: 'flex-start'
            }
        })
        let row = wrapper.vm.$el;
        expect(getComputedStyle(row).justifyContent).to.eq('flex-start');
        await wrapper.setProps({
            justify: 'center' 
        })
        expect(getComputedStyle(row).justifyContent).to.eq('center');
        await wrapper.setProps({
            justify: 'flex-end' 
        })
        expect(getComputedStyle(row).justifyContent).to.eq('flex-end');
        await wrapper.setProps({
            justify: 'space-between' 
        })
        expect(getComputedStyle(row).justifyContent).to.eq('space-between');
        await wrapper.setProps({
            justify: 'space-around' 
        })
        expect(getComputedStyle(row).justifyContent).to.eq('space-around');
    })
})