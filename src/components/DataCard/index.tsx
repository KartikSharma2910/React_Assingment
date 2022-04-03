import React from "react";
import { Box } from "@mui/material";
import styles from "./styles";
type DataCardProps = {
  wallpaper: string;
  author: string;
  id?: string;
};
const DataCard = ({ wallpaper, author }: DataCardProps) => {
  return (
    <Box sx={styles.card} className="card">
      <img src={wallpaper} alt="Loading..." className="cardImage" />

      <Box sx={styles.info} className="info">
        <p>Author Name</p>
        <h4
          style={{
            color: "#3399ff",
          }}
        >
          <b>{author}</b>
        </h4>
      </Box>
    </Box>
  );
};

export default DataCard;
