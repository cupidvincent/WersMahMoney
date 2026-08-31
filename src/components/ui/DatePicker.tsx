import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

type DatePickerProps = {
  value: Date;
  onChange: (date: Date) => void;
};

const DatePicker = ({ value, onChange }: DatePickerProps) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (_event: unknown, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }

    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View>
      <Pressable style={styles.input} onPress={() => setShowPicker(true)}>
        <Text>{value.toLocaleDateString()}</Text>
      </Pressable>

      {showPicker && (
        <DateTimePicker value={value} mode="date" onChange={handleChange} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
});

export default DatePicker;
