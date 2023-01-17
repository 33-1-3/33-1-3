// import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { mockSearchResult_default } from '@/utils/mocks/mockInfo';
import LPCover from './LPCover';
import { ProcessedResult } from '@/types/data';

export default {
  title: 'common/components/LPCover',
  component: LPCover,
  parameters: {
    design: {
      url: 'https://www.figma.com/file/y5dq4m439YJKRTrKw5ZsZV/33-1%2F3?node-id=177%3A656&t=ri42uDzp7Wjgw7vi-4',
    },
  },
} as ComponentMeta<typeof LPCover>;

const Template: ComponentStory<typeof LPCover> = (args) => (
  <LPCover {...args} />
);

export const SmallWithHoverEvnet = Template.bind({});
SmallWithHoverEvnet.args = {
  searchResult: mockSearchResult_default as ProcessedResult,
  size: 'small',
  hoverInteraction: true,
};

export const BigWithoutHoverEvent = Template.bind({});
BigWithoutHoverEvent.args = {
  searchResult: mockSearchResult_default as ProcessedResult,
  size: 'large',
  hoverInteraction: false,
};

export const ImgUrlIsEmptyString = Template.bind({});
ImgUrlIsEmptyString.args = {
  searchResult: { ...mockSearchResult_default, imgUrl: '' } as ProcessedResult,
  size: 'small',
  hoverInteraction: true,
};

export const ImgUrlIsInvalid = Template.bind({});
ImgUrlIsInvalid.args = {
  searchResult: {
    ...mockSearchResult_default,
    imgUrl: 'asdfasdf',
  } as ProcessedResult,
  size: 'small',
  hoverInteraction: true,
};
