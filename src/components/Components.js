import React from 'react';

function Components (props) {
    

    return <>
        <h2>{props.titleDefault}</h2>
        <span>{props.msg}</span>
    </>
}

// propiedades por Default
Components.defaultProps = {
    titleDefault: "Mi titulo"
}

export default Components;