export default function Friend({ friend }) {
  const { id, name, email } = friend;
  return (
    <div className="friends">
      <h3>Id: {id}</h3>
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
    </div>
  );
}
