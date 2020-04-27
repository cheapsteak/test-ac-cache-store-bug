import React from "react";

const ListItem = ({ name, ...rest }) => {
  return (
    <div>
      <h3 style={{ border: "2px solid green" }}>
        {rest.id ? `${rest.id} - ` : ""}
        {name}
      </h3>
    </div>
  );
};

export default ListItem;
