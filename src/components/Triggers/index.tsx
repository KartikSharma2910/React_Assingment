import React from "react";
import { Button } from "@mui/material";
import styles from "./styles";

type TriggersProps = {
  onClick: () => void;
  title: string;
};
const Triggers = ({ onClick, title }: TriggersProps) => {
  return (
    <Button sx={styles.triggers} onClick={onClick}>
      {title}
    </Button>
  );
};

export default Triggers;