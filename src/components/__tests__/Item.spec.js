import Item from '../Item.vue';
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';

describe('Item.vue', () => {
    test('sanity check', () => {
        expect(true).toBe(true)
    });

    test('contains its text once mounted', () => {
        const wrapper = shallowMount(Item);
        expect(wrapper.text()).toContain('item');
    });
});
