import React from 'react';
import { styled } from '@stitches/react';
import { TextField as RadixTextField, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../../global.css';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const StyledTextFieldRoot = styled(RadixTextField.Root, {
  display: 'flex',
  flexDirection: 'column',
});

const StyledTextFieldSlot = styled(RadixTextField.Slot, {
  display: 'flex',
});

const StyledTextFieldInput = styled(RadixTextField.Input, {
  textAlign: 'inherit',
});

const variantStyles = {
  classic: {
    variant: 'classic',
  },
  surface: {
    variant: 'surface',
  },
  soft: {
    variant: 'soft',
  },
};

interface TextFieldProps extends React.ComponentProps<typeof StyledTextFieldInput> {
  variant?: 'classic' | 'surface' | 'soft';
}

const SearchInput: React.FC<TextFieldProps> = ({ variant = 'classic', ...props }) => {
  const styles = variantStyles[variant];
  return (
    <Theme accentColor='orange'>
      <StyledTextFieldRoot variant={variant}>
        <StyledTextFieldSlot>
          <MagnifyingGlassIcon />
          <StyledTextFieldInput css={styles} {...props}/>
        </StyledTextFieldSlot>
      </StyledTextFieldRoot>
    </Theme>
  );
};

export default SearchInput;
