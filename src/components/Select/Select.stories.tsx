import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';

import Select from './Select';

export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () =>{
    const [value, setValue] = useState(2)

    return <>
        <Select
            value={value}
            items={[
                {title: 'Moscow', value: 1},
                {title: 'St. Petersburg', value: 2},
                {title: 'Ekaterinburg', value: 3}
            ]}
            onChange = {setValue}
        />
        </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select
            value={value}
            items={[
                {title: 'Moscow', value: 1},
                {title: 'St. Petersburg', value: 2},
                {title: 'Ekaterinburg', value: 3}
            ]}
            onChange = {setValue}
        />
    </>
}