import React from 'react';
import { useField } from 'formik';
import { StyleSheet } from 'react-native';
import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    flex: 1,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  // Check if the field is touched and the error message is present
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput 
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {/* Show error message if the value of the showError variable is true */}
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
