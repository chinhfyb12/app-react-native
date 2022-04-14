import {ColorStyles} from 'App/theme/colors';
import {Select, ISelectProps} from 'native-base';
import React, {FC, useState} from 'react';

interface IDataSelect {
  value: string;
  label: string;
}

interface ISelectCustomProps extends ISelectProps {
  options: IDataSelect[];
}

const SelectCustom: FC<ISelectCustomProps> = ({options}) => {
  const [selected, setSelected] = useState<string>();
  const onChange = (value: string) => {
    setSelected(value);
  };
  return (
    <Select
      selectedValue={selected}
      onValueChange={onChange}
      borderRadius={15}
      borderWidth={0}
      paddingTop={4}
      paddingBottom={4}
      backgroundColor={ColorStyles.background_primary}>
      {options.map((item, index: number) => (
        <Select.Item key={index} label={item.label} value={item.value} />
      ))}
    </Select>
  );
};

export default SelectCustom;
