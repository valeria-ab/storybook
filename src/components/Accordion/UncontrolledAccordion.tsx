import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering');


    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={ ()=> {setCollapsed(!collapsed)} }/>
        { !collapsed && <AccordionBody/> }
    </div>
}


type AccordionTitlePropsType = {
    title: string; 
    onClick: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}
type AccordionBodyPropsType = {

}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>

        </ul>
    </div>
}