import React, {useState} from "react";

export type ItemsPropsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemsPropsType[]
    onItemClick: (value: any) => void
}



export function Accordion(props: AccordionPropsType) {
    return <div>
        <ControlledAccordionTitle titleValue={props.titleValue} onChange={props.onChange}/>
        { !props.collapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick} /> }
    </div>
}


type ControlledAccordionTitlePropsType = {
    titleValue: string;
    onChange: () => void
}
function ControlledAccordionTitle(props: ControlledAccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onChange()}>{props.titleValue}</h3>
    )
} 


export type AccordionBodyPropsType = {
    items: ItemsPropsType[]
    onItemClick: (value: any) => void
}


function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return <div>
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.onItemClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    </div>
}