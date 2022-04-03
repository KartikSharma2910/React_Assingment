import { SxProps } from "@mui/system";

const styles: {
  [key: string]: SxProps;
} = {
  Wrapper: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#c6c8cc",
  },

  heading: {
    width: "100%",
    textAlign: "center",
    padding: "1rem",
    border: "1px solid #ccc",
    margin: "1rem",
    fontWeight: "bold",
    fontSize: "1.5rem",
    backgroundColor: "#86a3e3",
    color: "white",
  },

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
    textDecoration: "none",
  },
};

export default styles;
