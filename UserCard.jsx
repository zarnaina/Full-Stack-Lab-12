import Button from './Button.jsx';
 
export default function UserCard({ user, isFav, onToggleFav }) {
  const { address, company } = user;
 
  return (
    <article className={'user' + (isFav ? ' fav' : '')}>
      <h3>{user.name}</h3>
      <p className="muted">@{user.username} - {user.email}</p>
      {/* child property: user.address.city */}
      <p className="muted">City: {address.city} ({address.zipcode})</p>
      {/* child property: user.company.name */}
      <p className="muted">Company: {company.name}</p>
      <Button
        label={isFav ? 'Remove favourite' : 'Add favourite'}
        color={isFav ? 'ghost' : 'primary'}
        onClick={() => onToggleFav(user.id)}
      />
    </article>
  );
}
