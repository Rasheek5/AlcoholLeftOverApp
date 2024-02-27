import React, {useState} from 'react';
import {Button, TouchableOpacity} from 'react-native';
import RnDatePicker, {DatePickerProps} from 'react-native-date-picker';
import {TextField} from '../../components';
import moment from 'moment';

interface IDatePicker extends Partial<DatePickerProps> {
  label?: string;
  error?: string;
  value?: Date | null;
  defaultDate?: Date;
}

export const DatePicker = ({
  label,
  error,
  value,
  onConfirm,
  onCancel,
  defaultDate,
  ...rest
}: IDatePicker) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <TextField
          label={label ?? ''}
          editable={false}
          pointerEvents="none"
          value={value ? moment(value).format('DD/MM/YY') : ''}
          error={error}
        />
      </TouchableOpacity>
      <RnDatePicker
        modal
        mode="date"
        minimumDate={new Date()}
        open={open}
        date={value ?? defaultDate ?? new Date()}
        onConfirm={date => {
          setOpen(false);
          onConfirm && onConfirm(date);
        }}
        onCancel={() => {
          setOpen(false);
          onCancel && onCancel();
        }}
        {...rest}
      />
    </>
  );
};
