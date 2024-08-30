"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
export function UserDialog({ formData, onClose, open }) {
  function generateRandomId() {
    return Math.floor(Math.random() * 1000000);
  }
  const randomId = generateRandomId();

  const handleSubmit = () => {
    editUsers({
      username: document.getElementById("username").value,
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      gender: document.getElementById("gender").value,
      birthDate: document.getElementById("birthDate").value,
      bloodGroup: document.getElementById("bloodGroup").value,
      height: document.getElementById("height").value,
      weight: document.getElementById("weight").value,
      eyeColor: document.getElementById("eyeColor").value,
      hair: {
        color: document.getElementById("hairColor").value,
        type: document.getElementById("hairType").value,
      },
      address: {
        country: document.getElementById("country").value,
        state: document.getElementById("state").value,
      },
      university: document.getElementById("university").value,
      company: {
        name: document.getElementById("companyName").value,
        title: document.getElementById("companyTitle").value,
      },
      role: document.getElementById("role").value,
    });
    onClose("submit");
  };

  return (
    <>
      <Dialog onClose={() => onClose("cancel")} open={open}>
        <DialogTitle>Enter User Details</DialogTitle>
        <div style={{ padding: "20px" }}>
          <TextField
            name="username"
            label="Username"
            fullWidth
            margin="normal"
            defaultValue={formData.username}
          />
          <TextField
            name="firstName"
            label="First Name"
            fullWidth
            margin="normal"
            defaultValue={formData.firstName}
          />
          <TextField
            name="lastName"
            label="Last Name"
            fullWidth
            margin="normal"
            defaultValue={formData.lastName}
          />
          <TextField
            name="email"
            label="Email"
            fullWidth
            margin="normal"
            defaultValue={formData.email}
          />
          <TextField
            name="gender"
            label="Gender"
            fullWidth
            margin="normal"
            defaultValue={formData.gender}
          />
          <TextField
            name="birthDate"
            label="Birth Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={formData.birthDate}
          />
          <TextField
            name="bloodGroup"
            label="Blood Group"
            fullWidth
            margin="normal"
            defaultValue={formData.bloodGroup}
          />
          <TextField
            name="height"
            label="Height (cm)"
            fullWidth
            margin="normal"
            defaultValue={formData.height}
          />
          <TextField
            name="weight"
            label="Weight (kg)"
            fullWidth
            margin="normal"
            defaultValue={formData.weight}
          />
          <TextField
            name="eyeColor"
            label="Eye Color"
            fullWidth
            margin="normal"
            defaultValue={formData.eyeColor}
          />
          <TextField
            name="hairColor"
            label="Hair Color"
            fullWidth
            margin="normal"
            defaultValue={formData.hair.color}
          />
          <TextField
            name="hairType"
            label="Hair Type"
            fullWidth
            margin="normal"
            defaultValue={formData.hair.type}
          />
          <TextField
            name="country"
            label="Country"
            fullWidth
            margin="normal"
            defaultValue={formData.address.country}
          />
          <TextField
            name="state"
            label="State"
            fullWidth
            margin="normal"
            defaultValue={formData.address.state}
          />
          <TextField
            name="university"
            label="University"
            fullWidth
            margin="normal"
            defaultValue={formData.university}
          />
          <TextField
            name="companyName"
            label="Company Name"
            fullWidth
            margin="normal"
            defaultValue={formData.company.name}
          />
          <TextField
            name="companyTitle"
            label="Company Title"
            fullWidth
            margin="normal"
            defaultValue={formData.company.title}
          />
          <TextField
            name="role"
            label="Role"
            fullWidth
            margin="normal"
            defaultValue={formData.role}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Dialog>
    </>
  );
}

export default function UserDialogDemo({ popo }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create User
      </Button>
      <UserDialog formData={popo} open={open} onClose={handleClose} />
    </div>
  );
}
