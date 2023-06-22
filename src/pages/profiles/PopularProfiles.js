import React, { useState } from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";

const PopularProfiles =() => {
  const [profileData, setProfileData] = useState({
    // we will use the pageProfile later!
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  return (
    <Container className={appStyles.Content}>
      <p>Most Followed Profiles!</p>  
    </Container>
  );  
};

export default PopularProfiles;