import { SxProps } from "@mui/system";

const styles: {
  [key: string]: SxProps;
} = {
  card: {
    boxShadow: "0 8px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    border: "2px solid #f1f1f1",
    borderRadius: "10px",
    width: "28%",
    margin: "1rem",
    backgroundColor: "#e9f2ec",
    height: "min-content",

    "& .cardImage": {
      width: "100%",
      height: "400px",
      cursor: "pointer",
    },
  },

  info: {
    padding: "2px 16px",
  },
};

export default styles;
