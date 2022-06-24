import React, {useState} from "react";
import { Form }  from "semantic-ui-react";

const teamsToOptions = (teams) => {
  // iterate throught the teams (probably use a .map)
  // For each team, transalate the {id, abbrevation, city, etc} into {key: <unique val>, text: "what the user will see", value: "what you will get in the onSubmit"}
  return [];
};

function PlayerForm({ teams, onAddPlayer }) {
  const teamOptions = teamsToOptions(teams);
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        imageUrl: "",
        team: "",

    }) 

   function handleChange (e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
   }

   function handleSubmit() {
    const newPlayer = {
        name: formData.name,
        position: formData.position,
        imageUrl: formData.Url,
        team: formData.team,
      };

      fetch("http://localhost:3000/players", {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(newPlayer),
      })
        .then((resp) => {
          if (resp.status < 400) {
            return resp.json();
          }
          console.log(resp);
        })
        .then((onAddPlayer));
    }

  return (
    <div className="new-team-form">
      <h3>Add a Player!</h3>
      <Form onSubmit= {handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
          fluid label="Name" 
          placeholder="Name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Team"
            name="team"
            // options={teamOptions}
            placeholder="Team"
            value={formData.team}
            onChange={handleChange}
    
          />
          <Form.Input
            fluid
            label="Postion"
            placeholder="Postion"
            name="position"
            value={formData.position}
            onChange={handleChange}

          />
          <Form.Input
            fluid
            label="Player Image URL"
            placeholder="url"
            name="imageUrl"
            value={formData.Url}
            onChange={handleChange}

          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PlayerForm;
