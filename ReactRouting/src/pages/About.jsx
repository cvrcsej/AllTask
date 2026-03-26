export default function About({ user }) {
    return (
        <div>
            <h1>About Page</h1>
            <h3>{user.name?.toUpperCase()}</h3>
            <p>{user.Rollno?.toUpperCase()}</p><br/>
            <p>{user.College?.toUpperCase()}</p>
        </div>
    )
}