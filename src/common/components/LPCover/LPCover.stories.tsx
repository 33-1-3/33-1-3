// import React from 'react';
import { GlobalStyle } from '../../styles/globalStyle';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LPCover } from './LPCover';

export default {
  title: 'common/components/LPCover',
  component: LPCover,
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof LPCover>;

const Template: ComponentStory<typeof LPCover> = (args) => (
  <LPCover {...args} />
);

export const SmallWithHoverEvnet = Template.bind({});
SmallWithHoverEvnet.args = {
  imgURL:
    'https://i.discogs.com/jgaM3Iwz2t05Whh7VHfdtqYtIseHo3mRqk1PQNIUsF0/rs:fit/g:sm/q:90/h:398/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwMDg0/MDEtMTQwODY5NzMw/MS0zMzE2LmpwZWc.jpeg',
  title: '꽃갈피',
  size: 'small',
  hoverInteraction: true,
};

export const BigWithoutHoverEvent = Template.bind({});
BigWithoutHoverEvent.args = {
  imgURL:
    'https://i.discogs.com/jgaM3Iwz2t05Whh7VHfdtqYtIseHo3mRqk1PQNIUsF0/rs:fit/g:sm/q:90/h:398/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwMDg0/MDEtMTQwODY5NzMw/MS0zMzE2LmpwZWc.jpeg',
  title: '꽃갈피',
  size: 'large',
  hoverInteraction: false,
};

export const ImgURLIsEmptyString = Template.bind({});
ImgURLIsEmptyString.args = {
  imgURL: '',
  title: '꽃갈피',
  size: 'small',
  hoverInteraction: true,
};

export const ImgURLIsUndefined = Template.bind({});
ImgURLIsUndefined.args = {
  imgURL: undefined,
  title: '꽃갈피',
  size: 'small',
  hoverInteraction: true,
};

export const ImgURLIsInvalid = Template.bind({});
ImgURLIsInvalid.args = {
  imgURL: 'asdfasdf',
  title: '꽃갈피',
  size: 'small',
  hoverInteraction: true,
};
