import React, {useState} from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}
function Select(props: SelectPropsType) {
    const selectedItem = props.items.find();
        return (
            <div>
               <h3>{props.value}</h3>
                {props.items.map(i =>  <div>{i.title}</div>)}
            </div>
        )
    }



export default Select;