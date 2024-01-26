import "./App.css";
import Button from "./components/Button";
import { Card } from "./components/Card";
import { users } from "./data/users";
import { useState } from "react";

function App() {
  const [filteredUsers, setFilteredUsers] = useState([]);

  function sortByGenger(gender) {
    const usersByGender = users.filter((user) => user.gender === `${gender}`);
    setFilteredUsers(usersByGender);
  }

  function sortByName() {
    let sortedUsers = [...users];

    const usersByName = sortedUsers.sort((userA, userB) =>
      userA.name.first.localeCompare(userB.name.first)
    );
    setFilteredUsers(usersByName);
  }

  function sortByAge() {
    let sortedUsers = [...users];

    const usersByAge = sortedUsers.sort(
      (userA, userB) => userA.dob.age - userB.dob.age
    );
    setFilteredUsers(usersByAge);
  }

  return (
    <>
      <header>
        <h1>Array function magic</h1>

        <nav>
          <Button lable={"All"} onClick={() => setFilteredUsers(users)} />
          <Button lable={"Women"} onClick={() => sortByGenger("female")} />
          <Button lable={"Man"} onClick={() => sortByGenger("male")} />
          <Button lable={"By name"} onClick={sortByName} />
          <Button lable={"By age"} onClick={sortByAge} />
        </nav>
      </header>
      <main>
        <section className="card-list">
          {filteredUsers.length > 0
            ? filteredUsers.map((user) => <Card key={user.email} user={user} />)
            : users.map((user) => <Card key={user.email} user={user} />)}
        </section>
      </main>
    </>
  );
}

export default App;
