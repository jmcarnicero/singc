import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

const SelectCard = (props) => {
    const { t } = useTranslation();
    const [selectedItems, setSelected] = useState(props.selectedItems)
    useEffect(() => {
        setSelected(props.selectedItems)
    }, [props.selectedItems])


    const itemExist = (selectedItems, item) => selectedItems.some(itemTmp => itemTmp.value === item.value)

    const handleOnClickItem = item => {
        const tmpNewElements = itemExist(selectedItems, item) ? selectedItems.filter(i => i.id !== item.id) : [...selectedItems, item]

        setSelected(tmpNewElements)
        props.setSelected(tmpNewElements)
    }


    const renderBtn = data => {
        return data.map(item => {
            const active = itemExist(selectedItems, item);

            return (<Button key={item.id} active={active} className={props.className} disabled={props.disabled} variant="outline-primary" onClick={() => { handleOnClickItem(item) }} block >
                <span className="button-text ">
                    {t(item.id)}
                </span>
            </Button>)
        })
    }

    return (
        <div className="grid">
            {renderBtn(props.options)}
        </div>
    )
}

export default SelectCard;