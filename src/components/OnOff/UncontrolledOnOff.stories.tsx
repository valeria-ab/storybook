import React, { useState } from 'react';
import {action} from '@storybook/addon-actions'
import ControlledOnOff from './ControlledOnOff';



export default {
    title: 'ControlledOnOff',
    component: ControlledOnOff,
};
const callback = action('on or off clicked')

export const OnMode = () => <ControlledOnOff on={true} onChange={callback} />;
export const OffMode = () => <ControlledOnOff on={false} onChange={callback} />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <ControlledOnOff on={value} onChange={setValue} />
};