import { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";

function UserView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <p>Users List: </p>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default UserView;
