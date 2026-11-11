const URL = 'https://jsonplaceholder.typicode.com/users';
 
export async function fetchUsers() {
  try {
    const res = await fetch(URL);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch (err) {
    const res2 = await fetch('/users.json');
    if (!res2.ok) throw new Error('Could not load users (' + err.message + ')');
    return await res2.json();
  }
}
