import React, {ChangeEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../../stories/Button';

export default {
  title: 'input',
  //component: input
};

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  return <> <input onChange={(event) => {
  const actualValue = event.currentTarget.value;
  setValue(actualValue);
  }
  }/> - {value} </>;
}

export const GetValueValueOfUncontrolledInputBiButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  }

  return <> <input ref={inputRef} />
  <button onClick={save}>save</button> - actual value: {value} </>;
}

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");
  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  };
  return <input value = {parentValue} onChange={onChange }/>
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);
  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  };
  return <input type={"checkbox"} checked={parentValue} onChange={onChange }/>
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | null>(null);
  const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  };
  return <select>
    <option>none</option>
    <option value={"1"}>Moscow</option>
    <option value={"2"}>Minsk</option>
    <option value={"3"}>Kiev</option>
  </select>
}

export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"} />;


