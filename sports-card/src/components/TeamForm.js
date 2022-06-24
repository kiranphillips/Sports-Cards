import React, {useState} from "react";
import { Form} from "semantic-ui-react";

function TeamForm({onAddTeam}) {
  const [formData, setFormData] = useState({
    city: "",
    full_name: "",
    img: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    // Semantic UI React's Form component handles the preventDefault automatically!

    const newTeam = {
      city: formData.city,
      full_name: formData.name,
      abbreviation: formData.abbreviation,
      conference: formData.conference,
      img: formData.Url,
    };

    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTeam),
    })
      .then((r) => r.json())
      .then(onAddTeam);



  }

  const conferenceOptions = [
    {
      key: "West",
      text: "West",
      value: "West"
    },

    {
      key: "East",
      text: "East",
      value: "East"
    },
  
  ]


  return (
    <div className="new-team-form">
      <h3>Add a New NBA Team!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="City" placeholder="City" name="city" value={formData.city} onChange={handleChange} />
          <Form.Input fluid label="Team Name" placeholder="Team Name" name="name" value={formData.name} onChange={handleChange}/>
          <Form.Input fluid label="Abbreviated Name" placeholder="Abbreviated Name" name="abbreviation" value={formData.abbreviation} onChange={handleChange}/>
          <Form.Input fluid label="Team Image Url" placeholder="Url" name="Url" value={formData.Url} onChange={handleChange}/>
          <Form.Input fluid label="Select Conference" placeholder="Select Conference" name="conference" value={formData.conference} onChange={handleChange}/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default TeamForm;