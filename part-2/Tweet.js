const Tweet = (props) => {
    return (
        <div className="tweet">
            <p><b>{props.name}</b> (<i>{props.username}</i>): {props.message}</p>
            <span>posted at: {props.date}</span>
        </div>
    )
}