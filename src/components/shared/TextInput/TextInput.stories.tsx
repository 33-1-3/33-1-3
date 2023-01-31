import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';

export default {
  title: 'shared/TextInput',
  component: TextInput,
  parameters: {
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=181%3A2903&t=ri42uDzp7Wjgw7vi-4',
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const TextInputWithLabel = Template.bind({});
TextInputWithLabel.args = {
  width: 416,
  height: 36,
  label: 'Label',
  placeholder: 'placeholder',
  required: true,
  validationTester: /^.{1,}$/,
  errorMsg: '최소 한 글자 이상 입력해주세요.',
};

export const TextInputWithoutLabel = Template.bind({});
TextInputWithoutLabel.args = {
  width: 416,
  height: 36,
  placeholder: 'placeholder',
  required: true,
  validationTester: /^.{1,}$/,
  errorMsg: '최소 한 글자 이상 입력해주세요.',
};

export const TextInputWithoutPlaceholder = Template.bind({});
TextInputWithoutPlaceholder.args = {
  width: 416,
  height: 36,
  label: 'Label',
  required: true,
  validationTester: /^.{1,}$/,
  errorMsg: '최소 한 글자 이상 입력해주세요.',
};

export const TextInputWithInitialValue = Template.bind({});
TextInputWithInitialValue.args = {
  width: 416,
  height: 36,
  label: 'Label',
  placeholder: 'placeholder',
  required: true,
  validationTester: /^.{1,}$/,
  errorMsg: '최소 한 글자 이상 입력해주세요.',
  value: 'collection',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  width: 416,
  height: 36,
  label: 'Email',
  placeholder: '이메일을 입력해주세요.',
  required: true,
  validationTester:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  errorMsg: '이메일 형식에 맞게 입력해주세요.',
};
