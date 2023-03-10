// import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LPCover from './LPCover';
import { mockSearchResult_default } from '@/utils/mocks/mockInfo';
import { ProcessedResult } from '@/types/data';

export default {
  title: 'features/LPCover',
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

export const SmallWithHoverEvent = Template.bind({});
SmallWithHoverEvent.args = {
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

export const ImgUrlIsEmptyStringAndTitleIsLong = Template.bind({});
ImgUrlIsEmptyStringAndTitleIsLong.args = {
  searchResult: {
    ...mockSearchResult_default,
    imgUrl: '',
    titleInfo: { title: '꽃갈피꽃갈피꽃갈피꽃갈피꽃갈피', artist: 'IU' },
  } as ProcessedResult,
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

export const ImgUrlIsUndefined = Template.bind({});
ImgUrlIsUndefined.args = {
  searchResult: {
    ...mockSearchResult_default,
    imgUrl: undefined,
  } as ProcessedResult,
  size: 'small',
  hoverInteraction: true,
};
