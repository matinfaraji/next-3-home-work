import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { v4 as uuidv } from "uuid";
import { addUsers } from "../../../utils/actions";
export function UserDialog(props) {
  const { onClose, open } = props;
  function generateRandomId() {
    return Math.floor(Math.random() * 1000000);
  }

  const randomId = generateRandomId();

  const handleSubmit = () => {
    addUsers({
      id: randomId,
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
    <Dialog onClose={() => onClose("cancel")} open={open}>
      <DialogTitle>Enter User Details</DialogTitle>
      <div style={{ padding: "20px" }}>
        <TextField id="username" label="username" fullWidth margin="normal" />
        <TextField
          id="firstName"
          label="First Name"
          fullWidth
          margin="normal"
        />
        <TextField id="lastName" label="Last Name" fullWidth margin="normal" />
        <TextField id="email" label="Email" fullWidth margin="normal" />
        <TextField id="gender" label="Gender" fullWidth margin="normal" />
        <TextField
          id="birthDate"
          label="Birth Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="bloodGroup"
          label="Blood Group"
          fullWidth
          margin="normal"
        />
        <TextField id="height" label="Height (cm)" fullWidth margin="normal" />
        <TextField id="weight" label="Weight (kg)" fullWidth margin="normal" />
        <TextField id="eyeColor" label="Eye Color" fullWidth margin="normal" />
        <TextField
          id="hairColor"
          label="Hair Color"
          fullWidth
          margin="normal"
        />
        <TextField id="hairType" label="Hair Type" fullWidth margin="normal" />
        <TextField id="country" label="Country" fullWidth margin="normal" />
        <TextField id="state" label="State" fullWidth margin="normal" />
        <TextField
          id="university"
          label="University"
          fullWidth
          margin="normal"
        />
        <TextField
          id="companyName"
          label="Company Name"
          fullWidth
          margin="normal"
        />
        <TextField
          id="companyTitle"
          label="Company Title"
          fullWidth
          margin="normal"
        />
        <TextField id="role" label="Role" fullWidth margin="normal" />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Dialog>
  );
}

export default function UserDialogDemo() {
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
      <UserDialog open={open} onClose={handleClose} />
    </div>
  );
}
