import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from './TextInput';

export default {
  title: 'pages/MyCollection/TextInput',
  component: TextInput,
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
  validationTester: /^.{2,}$/,
  errorMsg: '최소 두 글자 이상 입력해주세요.',
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
