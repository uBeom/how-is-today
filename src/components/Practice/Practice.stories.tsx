import { ComponentStory, ComponentMeta } from '@storybook/react';

import Practice from '@/components/Practice';

export default {
  title: 'ex/Practice',
  component: Practice,
} as ComponentMeta<typeof Practice>;

const Template: ComponentStory<typeof Practice> = args => (
  <Practice {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'practice',
  isActive: true,
};

export const Primary = Template.bind({});
Primary.args = {
  label: '이건 글이라는 것이다.',
  isActive: false,
};
