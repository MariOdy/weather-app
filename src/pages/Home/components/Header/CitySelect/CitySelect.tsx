import React from "react";
import { useNavigate } from "react-router-dom";
import { SelectWrapper } from "../styles";



import CreatableSelect from 'react-select/creatable';
import { CityOption, cityOptions } from '../data';
import { ActionMeta, OnChangeValue } from 'react-select';


const CitySelect: React.FC = () => {
    const navigate = useNavigate();


    const handleChange = (
        newValue: OnChangeValue<CityOption, false>,
        actionMeta: ActionMeta<CityOption>
      ) => {
            
        navigate(`/${newValue?.value}`)

      }
     
      
  return (
    <SelectWrapper>
      <CreatableSelect
        isClearable
        onChange={handleChange}
        options={cityOptions}
      />
    </SelectWrapper>
  );
};

export default CitySelect;
