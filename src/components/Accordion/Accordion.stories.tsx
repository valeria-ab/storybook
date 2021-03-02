import React, { useState } from 'react';
import {action} from '@storybook/addon-actions'
import {ControlledAccordion} from './ControlledAccordion';



export default {
    title: 'ControlledAccordion',
    component: ControlledAccordion,
};
const callback = action('accordion mode change event fired')

export const MenuCollapsedMode = () => <ControlledAccordion titleValue={'Menu'} collapsed={true} onChange={callback} />;
export const UsersUncollapsedMode = () => <ControlledAccordion titleValue={'Users'} collapsed={false} onChange={callback} />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <ControlledAccordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)} />
};