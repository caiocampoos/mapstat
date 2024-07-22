import React from 'react';
import { styled } from '@stitches/react';
import { TextField as RadixTextField, Theme, type textFieldPropDefs } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../../global.css';

const StyledTextFieldRoot = styled(RadixTextField.Root, {
  display: 'flex',
  flexDirection: 'column',
});

const StyledTextFieldInput = styled(RadixTextField.Input, {
  textAlign: 'center',
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

const Input: React.FC<TextFieldProps> = ({ variant = 'classic', ...props }) => {
  const styles = variantStyles[variant];
  return (
    <Theme accentColor='orange'>
      <StyledTextFieldRoot variant={variant}>
        <StyledTextFieldInput css={styles} {...props}/>
      </StyledTextFieldRoot>
    </Theme>
  );
};

export default Input;
