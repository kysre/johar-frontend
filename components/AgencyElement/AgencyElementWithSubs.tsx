import { Avatar, Paper } from "@mantine/core";
import React from "react";

const AgencyElementWithSubs = () => {
    const paperStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'xl',
      borderRadius: 'md',
      padding: 'xl',
      textAlign: 'center',
    };
  
    return (
      <Paper style={paperStyle}>
        <Avatar radius="xl" size="xl" style={{ marginBottom: '16px' }} />
        <text style={{ margin: '0' }}>Abbas</text>
        <text style={{ margin: '0' }}>Subscriptions: 256</text>
      </Paper>
    );
  };
  

export default AgencyElementWithSubs;
