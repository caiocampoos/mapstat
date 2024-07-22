import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from 'ui';

const meta = {
  title: 'Example/SearchInput',
  component: SearchInput,
  parameters: {
    variant: 'classic',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: ['classic', 'soft', 'surface'],
    },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Placeholder',
    size: '2',
  },
};

export const PrimarySmall: Story = {
  args: {
    placeholder: 'Placeholder',
    size: '1',
  },
};

export const PrimaryLarge: Story = {
  args: {
    placeholder: 'Placeholder',
    size: '3',
  },
};

export const Secondary: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'soft',
  },
};

export const SecondarySmall: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'soft',
    size: '1',
  },
};

export const SecondaryLarge: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'soft',

      size: '3',
  },
};

export const Surface: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'surface',
  },
};

export const SurfaceSmall: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'surface',
    size: '1',
  },
};

export const SurfaceLarge: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'surface',
    size: '3',
  },
};


