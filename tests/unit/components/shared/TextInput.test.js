import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TextInput from '@/components/shared/TextInput.vue';

describe('TextInput', () => {
  it('emits input event with value', async () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: 'initial value',
      },
    });

    await wrapper.find('input').setValue('updated value');

    expect(wrapper.emitted('update:modelValue')).toEqual([['updated value']]);
  });

  it('renders model value', () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: 'test value',
      },
    });

    expect(wrapper.find('input').element.value).toBe('test value');
  });
});
