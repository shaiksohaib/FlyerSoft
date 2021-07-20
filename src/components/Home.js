import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const contacts = useSelector((state) => state);

  return (
    <div className="container">
      <div className="row d-flex flex-column"> 
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-primary text-white">
            <tr>
                <th scope="col">S.Number</th>
                <th scope="col">Name</th>
                <th scope="col">Date Of Birth</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.date.toString()}</td>
                    <td>{contact.number}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
