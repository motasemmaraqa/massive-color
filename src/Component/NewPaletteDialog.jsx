import React, { useState, useEffect, useRef } from 'react';

import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import 'emoji-mart/css/emoji-mart.css';

import data from '@emoji-mart/data';
import { Picker } from 'emoji-mart';

function EmojiPicker(props) {
  const ref = useRef();

  useEffect(() => {
    new Picker({ ...props, data, ref });
  }, []);

  return <div ref={ref} />;
}

const NewPaletteDialog = (props) => {
  const [stage, setStage] = useState('name');
  const [paletteName, setPaletteName] = useState('');

  const handlePaletteNameChange = (e) => {
    setPaletteName(e.target.value);
  };
  const { handleClose, onFormSubmit, palette } = props;
  const addPalette = (emoji) => {
    const paletteObj = {
      id: paletteName.replace(/ /g, '-'),
      paletteName,
      emoji: emoji.native,
    };
    onFormSubmit(paletteObj);
    setStage('');
  };
  const onPickName = () => {
    setStage('emoji');
  };
  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
      return palette.every((el) => {
        return el.paletteName.toLowerCase() !== value;
      });
    });
  }, [palette]);

  return (
    <>
      <Dialog open={stage === 'emoji'} onClose={handleClose}>
        <DialogTitle>Pick emoji</DialogTitle>
        <DialogContent>
          <EmojiPicker onEmojiSelect={addPalette} />
        </DialogContent>
      </Dialog>
      <Dialog open={stage === 'name'} onClose={handleClose}>
        <ValidatorForm onSubmit={onPickName}>
          <DialogTitle>Name Your Palette</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please pick name for your pallet make sure its uniq!
            </DialogContentText>
            <TextValidator
              placeholder="palette name"
              validators={['required', 'isPaletteNameUnique']}
              onChange={handlePaletteNameChange}
              value={paletteName}
              fullWidth
              errorMessages={[
                'this field is required',
                'palette name must be unique',
              ]}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary" type="submit">
              Next
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </>
  );
};

export default NewPaletteDialog;
