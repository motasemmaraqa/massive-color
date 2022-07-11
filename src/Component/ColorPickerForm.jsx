import React, { useState, useEffect } from 'react';

import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const style = {
  colorPicker: { width: '100% !important' },
  formField: {
    width: '100%',
    boxSizing: 'border-box !important',
    '& input': { height: '20px', boxSizing: 'border-box' },
    '& button': {
      width: '100%',
      height: '60px',
      fontWight: 'bolder',
      fontSize: '1.5rem',
      color: 'white',
    },
  },
  textField: {
    width: '100%',
  },
};

const ColorPickerForm = (props) => {
  const [currentColor, setCurrentColor] = useState('teal');
  const [submitButtonColor, setSubmitButtonColor] = useState('teal');
  const [colorName, setColorName] = useState('');
  const handelColorChange = (color) => {
    setCurrentColor(color.hex);
  };
  const handelColorChangeFinished = (color) => {
    setSubmitButtonColor(color.hex);
  };
  const handleColorNameChange = (e) => {
    setColorName(e.target.value);
  };

  const { isPaletteFull, onSubmit, colors, classes } = props;
  const onSubmitHandler = () => {
    const newColor = {
      color: currentColor,
      name: colorName,
    };
    // const num1 = Math.round(Math.random() * 255);
    // const num2 = Math.round(Math.random() * 255);
    // const num3 = Math.round(Math.random() * 255);
    // const colorString = `rgb(${num1},${num2},${num3})`;
    onSubmit(newColor);
    setColorName('');
    // setCurrentColor(colorString);
    // setSubmitButtonColor(colorString);
  };
  useEffect(() => {
    ValidatorForm.addValidationRule('isNameUnique', (value) => {
      return colors.every((el) => {
        return el.name !== value;
      });
    });
    ValidatorForm.addValidationRule('isColorUnique', (value) => {
      return colors.every((el) => {
        return el.color !== submitButtonColor;
      });
    });
  }, [colors, submitButtonColor]);
  return (
    <>
      <ChromePicker
        className={classes.colorPicker}
        color={currentColor}
        onChange={handelColorChange}
        onChangeComplete={handelColorChangeFinished}
      ></ChromePicker>
      <ValidatorForm
        className={classes.formField}
        onSubmit={onSubmitHandler}
        instantValidate={false}
      >
        <TextValidator
          className={classes.textField}
          //   inputStyle={{ classes: classes.textField }}

          margin="normal"
          validators={['required', 'isNameUnique', 'isColorUnique']}
          onChange={handleColorNameChange}
          value={colorName}
          errorMessages={[
            'this field is required',
            'color name must be unique',
            'this color is already used',
          ]}
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            backgroundColor: isPaletteFull
              ? 'rgba(0, 0, 0, 0.12)'
              : submitButtonColor,
          }}
          // onClick={onSubmit}
          disabled={isPaletteFull}
        >
          ADD COLOR
        </Button>
      </ValidatorForm>
    </>
  );
};

export default withStyles(style)(ColorPickerForm);
