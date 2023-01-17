import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from './TextInput';

export default {
  title: 'common/components/TextInput',
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

export const CollectionNameInput = Template.bind({});
CollectionNameInput.args = {
  width: 416,
  height: 36,
  label: 'Collection Name',
  placeholder: '생성할 콜렉션의 이름을 입력해주세요.',
  required: true,
  validationTester: /^.{1,}$/,
  errorMsg: '최소 한 글자 이상 입력해주세요.',
};

export const ModalCollectionNameInput = Template.bind({});
ModalCollectionNameInput.args = {
  width: 408,
  height: 48,
  color: 'var(--purple-900)',
  borderColor: 'var(--purple-900)',
  placeholder: '생성할 콜렉션의 이름을 입력해주세요.',
  required: true,
  validationTester: /^.{1,}$/,
  errorMsg: '최소 한 글자 이상 입력해주세요.',
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
