import React from "react";
import getData from "../../../../utils/getData";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Head from "next/head";
export default async function page({ params }) {
  const foundUser = await getData(`https://dummyjson.com/users/${params.id}`);
  <meta name="description" content={`Details about ${foundUser.name}`} />;
  return (
    <>
      <Head>
        <title>{`Details about ${foundUser.firstName} ${foundUser.lastName}`}</title>
        <meta
          name="description"
          content={`Details about ${foundUser.firstName} ${foundUser.lastName}`}
        />
      </Head>
      <Grid item key="users" align="center">
        <Grid className="text-2xl" align="center">
          Users
        </Grid>
        <Box sx={{ maxWidth: 500, justifyContent: "center" }} align="center">
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {foundUser.username}
              </Typography>
              <Typography variant="h5" component="div">
                {foundUser.firstName} {foundUser.lastName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {foundUser.email}
              </Typography>
              <Typography variant="body2">Age: {foundUser.age}</Typography>
              <Typography variant="body2">
                Gender: {foundUser.gender}
              </Typography>
              <Typography variant="body2">Phone: {foundUser.phone}</Typography>
              <Typography variant="body2">
                Birth Date: {foundUser.birthDate}
              </Typography>
              <Typography variant="body2">
                Blood Group: {foundUser.bloodGroup}
              </Typography>
              <Typography variant="body2">
                Height: {foundUser.height} cm
              </Typography>
              <Typography variant="body2">
                Weight: {foundUser.weight} kg
              </Typography>
              <Typography variant="body2">
                Eye Color: {foundUser.eyeColor}
              </Typography>
              <Typography variant="body2">
                Hair: {foundUser.hair.color}, {foundUser.hair.type}
              </Typography>
              <Typography variant="body2">
                Address: {foundUser.address.address}, {foundUser.address.city},{" "}
                {foundUser.address.state}, {foundUser.address.country}
              </Typography>
              <Typography variant="body2">
                University: {foundUser.university}
              </Typography>
              <Typography variant="body2">
                Company: {foundUser.company.name}, {foundUser.company.title}
              </Typography>
              <Typography variant="body2">Role: {foundUser.role}</Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </>
  );
}
