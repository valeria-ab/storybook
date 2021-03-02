import React, { useState } from 'react';
import {action} from '@storybook/addon-actions'
import { UncontrolledAccordion } from './UncontrolledAccordion';



export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};
const callback = action('accordion mode change event fired')

export const MenuChanging = () => <UncontrolledAccordion titleValue={'Menu'} />;

export const ModeChanging = () => <UncontrolledAccordion titleValue={'Users'} />;