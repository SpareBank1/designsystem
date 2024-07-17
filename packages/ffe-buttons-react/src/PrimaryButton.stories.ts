import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton } from '@sb1/ffe-buttons-react';

type Story = StoryObj<typeof PrimaryButton>;

const meta: Meta<typeof PrimaryButton> = {
  title: 'Komponenter/Buttons/PrimaryButton',
  component: PrimaryButton,
};

export default meta;

export const PrimaryButton: Story = (
  <>
    <PrimaryButton>
      Lagre
    </PrimaryButton>
  </>
);
