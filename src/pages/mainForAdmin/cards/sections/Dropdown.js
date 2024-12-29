/* eslint-disable react/prop-types */
import React from 'react';
import Select from 'react-select';

const Dropdown = ({ options, selectedOption, onSelect }) => {
  // Format options for react-select
  const formattedOptions = options.map((option) => ({ value: option, label: option }));

  const handleChange = (selected) => {
    onSelect(selected.value); // Extract value from react-select option
  };

  return (
    <div style={styles.container}>
      <Select
        options={formattedOptions}
        value={formattedOptions.find((opt) => opt.value === selectedOption)}
        onChange={handleChange}
        placeholder="Select Notification"
        styles={customStyles}
      />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  },
};

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: '#73224B',
    borderWidth: '2px',
    borderRadius: '5px',
    padding: '5px',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#73224B',
    fontSize: '16px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#73224B',
    fontSize: '16px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#73224B' : '#fff',
    color: state.isFocused ? '#fff' : '#73224B',
    padding: '10px',
  }),
};

export default Dropdown;