const User = ({name, username, email}) => {
    return (
        <div className={ 'user' }>
            <h2>{ name }</h2>
            <p>{ username }</p>
            <p>{ email }</p>
        </div>
    )
}

export default User;