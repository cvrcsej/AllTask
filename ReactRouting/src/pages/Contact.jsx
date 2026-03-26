export default function Contact({ contact }) {
    return (
        <div>
            <h1>Contact Page</h1>
            <h3>{contact.Email?.toUpperCase()}</h3>
            <p>{contact.Phone}</p><br />
            <p>{contact.Location?.toUpperCase()}</p>
        </div>
    ) 
}