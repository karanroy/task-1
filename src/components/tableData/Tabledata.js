import React, { useState, useEffect } from "react";
import "./tabledata.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Table } from "react-bootstrap";
import users from "../../data.json";

export default function Tabledata({ selectedName, selectedBox }) {
  const [allCheckUser, setAllCheckUser] = useState([]);
  let searchedName = selectedName;

  function clickhandler() {
    console.log("button clicked");
    alert("no function is assigned");
  }

  function changeHandler(e) {
    let newUser = e.target.value;
    let checkdata = users.filter((val) => {
      return val.name == newUser;
    });
    setAllCheckUser([...allCheckUser, ...checkdata]);
  }
  console.log(allCheckUser);

  return (
    <div className="container-2">
      <Table striped>
        <tbody>
          <tr>
            <th>Items</th>
            <th>Name</th>
            <th>Email</th>
            <th>contact</th>
          </tr>

          {selectedBox ? (
            <>
              {allCheckUser.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {
                        <input
                          type="checkbox"
                          value={item.name}
                          //   onChange={(e) => changeHandler(e)}
                          checked
                        />
                      }
                    </td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                  </tr>
                );
              })}
            </>
          ) : (
            <>
              {users
                .filter((user) => {
                  if (searchedName === "") {
                    return user;
                  }
                  if (user.name === searchedName) {
                    return user;
                  }
                })
                .map((item, i) => {
                  //   console.log(item);
                  return (
                    <tr key={i}>
                      <td>
                        {
                          <input
                            type="checkbox"
                            value={item.name}
                            onChange={(e) => changeHandler(e)}
                          />
                        }
                      </td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                    </tr>
                  );
                })}
            </>
          )}
        </tbody>
      </Table>
      <hr></hr>
      <div className="Button">
        <button onClick={clickhandler}> Done </button>
      </div>
    </div>
  );
}
