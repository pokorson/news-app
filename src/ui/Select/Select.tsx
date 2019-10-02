import React from "react";
import ReactSelect from "react-select";

interface OptionItem {
  label: string;
  value: string | number | null;
}

interface SelectProps {
  placeholder: string;
  options: OptionItem[];
  onChange?: any;
  value?: any;
}

const customStyles = {
  option: (provided: any, state: any) => {
    return {
      ...provided,
      backgroundColor: "#ffffff",
      padding: "8px 16px",
      color: state.isSelected ? "#493BE1" : "inherit",
      border: state.isFocused ? "1px solid #493BE1" : "1px solid transparent"
    };
  },
  menu: (provided: any) => ({
    ...provided,
    borderRadius: 0,
    padding: "8px 0px;"
  }),
  control: (provided: any) => ({
    ...provided,
    borderRadius: 0,
    border: "1px solid transparent",
    borderBottomColor: "#DCDCDC"
  }),
  indicatorSeparator: () => ({
    width: 0
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    paddingRight: 0
  })
};

const Select = (props: SelectProps) => {
  return <ReactSelect isSearchable={false} {...props} styles={customStyles} />;
};

export default Select;
