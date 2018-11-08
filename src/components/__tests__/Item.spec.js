import Item from '../Item.vue';
import Vue from 'vue';

describe('Item.vue', () => {
    test('sanity check', () => {
        expect(true).toBe(true)
    });

    test('contains its text once mounted', () => {
        const Ctor = Vue.extend(Item);
        const vm = new Ctor();
        vm.$mount();
        expect(vm.$el.textContent).toContain('item');
    });
});
