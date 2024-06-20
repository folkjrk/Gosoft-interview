import React from 'react'

export const ColumnToggle = (props) => {
  const onToggle = (e) => {
    // TODO: implement checkbox click handler

    const { name, checked } = e.target;
    props.onToggle(name, checked);
  }

  // TODO: Bind handlers and props
  return (
    <div className="toggle-columns">
      { 
        Object.keys(props.toggles).map((toggle, index) => {
          return ( 
          <div key={index}>
            <label htmlFor={toggle}>
              {toggle}
            </label>
            <input
              id={toggle}
              name={toggle}
              type="checkbox"
              checked={props.toggles[toggle]}
              onChange={onToggle}
               />
          </div>)
        })
      }
    </div>
  );
}
