import React from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInputComponent';
import * as yup from 'yup';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputs: {
    flex: 1,
    color: "white",
    marginTop: 4,
    borderStyle: 'solid',
    borderColor: 'gray',
    backgroundColor: 'pink',

  },
  textCalculate: {
    flex: 4,
    color: 'white',
    height: 5,
    borderColor: 'gray',
    backgroundColor: 'green',
  }
})

const initialValues = {
  mass: '',
  height: '',
};

const getBodyMassIndex = (mass, height) => {
  return Math.round(mass / Math.pow(height, 2));
};

const BodyMassIndexForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput name="mass" placeholder="Weight (kg)" />
      <FormikTextInput name="height" placeholder="Height (kg)" />
      <Pressable style={styles.textCalculate} onPress={onSubmit}>
        <Text>Calculate</Text>
      </Pressable>
    </View>
  );
};

const validationSchema = yup.object().shape({
  mass: yup
    .number()
    .min(1, 'Weight must be greater or equal to 1')
    .required('Weight is required'),
  height: yup
    .number()
    .min(0.5, 'Height must be greater or equal to 0.5')
    .required('Height is required'),
});

const BodyMassIndexCalculator = () => {
  const onSubmit = values => {
    const mass = parseFloat(values.mass);
    const height = parseFloat(values.height);

    if (!isNaN(mass) && !isNaN(height) && height !== 0) {
      console.log(`Your body mass index is: ${getBodyMassIndex(mass, height)}`);
    }
  };

  return (
    <Formik
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {( {handleSubmit }) => <BodyMassIndexForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default BodyMassIndexCalculator;
