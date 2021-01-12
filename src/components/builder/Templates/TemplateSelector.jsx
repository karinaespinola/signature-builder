import React from 'react'
import TemplateRadio from './TemplateRadio';
import jexanPreview from '../../../img/jexan.png';

const TemplateSelector = () => {
    return (
        <div className="mt-5">
            <TemplateRadio src={jexanPreview} id="jexan" checked={true}/>
        </div>
    )
}

export default TemplateSelector
