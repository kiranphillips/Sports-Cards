import React from "react";
import { Form } from "semantic-ui-react";

function PlayerForm() {
  return (
    <div className="new-plant-form">
      <h3>Add a Player!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="Postion" placeholder="Postion" name="Postion" />
          <Form.Input
            fluid
            label="Player Image URL"
            placeholder="url"
            name="frontUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PlayerForm;