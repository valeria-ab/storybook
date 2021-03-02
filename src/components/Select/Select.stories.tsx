import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';

import Select from './Select';

export default {
    title: 'Select',
    component: Select,
};

export const BaseExample = () => <Select
    value={"Список друзей"}
    items={[
        {title: 'Tanyusha', value: 1},
        {title: 'Nadyusha', value: 2},
        {title: 'Sveta', value: 3}
        ]}
        onChange = {action('Value changed')}
    />

