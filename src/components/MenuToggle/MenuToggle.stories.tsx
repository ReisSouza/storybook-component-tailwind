import React from 'react';
import { Story, Meta } from '@storybook/react';

import MenuToggle, { MenuToggleProps } from './MenuToggle';

export default {
  title: 'Button/MenuHamburger',
  component: MenuToggle,
  argTypes: {
    onPress: { table: { disable: true }, action: 'Button pressed!' },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    disabled: false,
  },
} as Meta<MenuToggleProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<MenuToggleProps> = (args) => <MenuToggle {...args} />;

export const Default: Story<MenuToggleProps> = Template.bind({});
Default.args = {};
