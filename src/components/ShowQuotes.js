

export default function ShowQuotes(props) {


    const listItems = props.data.map((item, index) => {
        return (
            <li key={index}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div>{item}</div>
                    <button onClick={() => props.removeQuoteFunction(item)}>x</button>
                </div>
            </li>
        )
    })


    return (
        <>
            <ul>{listItems}</ul>
        </>
    )
}