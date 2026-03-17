import { useEffect, useState } from "react";

function Account() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("popxUser"));
    setUser(storedUser);
  }, []);

  if (!user) return null;

  return (
    <div>

      <h2>Account Settings</h2>

      <div className="profile-card">

        <img
          className="profile-img"
          src="https://i.pravatar.cc/100"
          alt="profile"
        />

        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>

      </div>

      <p className="profile-desc">
       This is a sample profile description used for demonstration purposes..
      </p>

    </div>
  );
}

export default Account;