import { SxProps } from "@mui/system";

const styles: {
  [key: string]: SxProps;
} = {
  Wrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem",

    "& .wallPaper": {
      width: "40%",
      height: "400px",
    },
  },

  author: {
    margin: "1rem",
    fontSize: "3rem",
    color: "grey",
    fontWeight: "bold",
  },
};

export default styles;
