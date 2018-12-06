import Item from '../Item.vue';
import { mount } from '@vue/test-utils';
import Vue from 'vue';

describe('Item.vue', () => {
    test('sanity check', () => {
        expect(true).toBe(true)
    });

    test('contains its text once mounted', () => {
        const wrapper = mount(Item);
        expect(wrapper.vm.$el.textContent).toContain('item');
    });
});
