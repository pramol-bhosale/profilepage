import React from 'react'

function InputField({classes,type,id,placeholder,label,onChangeF}) {
  return (
    <div className={`${classes} form-floating`}>
        <input type={type} className="form-control" id={id} placeholder={placeholder} onChange={(e)=>{onChangeF(e)}}/>
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default InputField