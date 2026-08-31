import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

const TextInput = ({ style, ...props }: TextInputProps) => {
  return <RNTextInput {...props} style={[styles.input, style]} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInput;
