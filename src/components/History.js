import React from 'react'

const History = (props) => {

const history = props.data.map(i => {
    return (
        <div className="history-element">
            <button onClick={() => props.onClick(i)}>{i.city ? i.city : 'none'}</button>
        </div>
    )
})

    return (
        <div className="history-elements">
            { history }
        </div>
    )
}

export default History;
