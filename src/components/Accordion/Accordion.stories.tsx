import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react/types-6-0';
import {Button, ButtonProps} from '../../stories/Button';


export default {
    title: 'ControlledAccordion',
    component: Accordion,
};
const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
const callbacksProps = {
    onChange: callback,
    onClick: callback
}
export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: [],
    onItemClick: onClickCallback
}

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [{title: 'Tanyusha', value: 1}, {title: 'Nadyusha', value: 2}, {title: 'Sveta', value: 3}],
    onItemClick: onClickCallback
}


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[{title: 'Tanyusha', value: 1}, {title: 'Nadyusha', value: 2}, {title: 'Sveta', value: 3}]}
                      onItemClick={onClickCallback}/>
};