import { Avatar, Paper } from "@mantine/core";
import React from "react";

const AgencyElementSimple = () => {
  return (
    <Paper shadow="xs" radius="md" p="xl" style={{ textAlign: 'center' }}>
    <Avatar radius="xl" size="xl" style={{ marginBottom: 16 }} />
    <p style={{ margin: 0 }}>Abbas</p>
  </Paper>
  );
};

export default AgencyElementSimple;
