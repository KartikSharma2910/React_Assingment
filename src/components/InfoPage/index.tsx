import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Trigger from "../Triggers";
import styles from "./styles";

type InfoPageProps = {
  id: string;
  download_url: string;
  data: any;
  author: string;
};
const InfoPage = () => {
  const [data, setData] = useState({} as InfoPageProps);
  const { id } = useParams<InfoPageProps>();

  const fetchData = async (url: string) => {
    try {
      const response: any = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(`https://picsum.photos/id/${id}/info`);
  }, [id]);

  return (
    <Box sx={styles.Wrapper}>
      <img className="wallPaper" src={data.download_url} alt="img" />
      <Box sx={styles.author}>{data.author}</Box>
      <Trigger onClick={() => window.history.go(-1)} title="Back" />
    </Box>
  );
};

export default InfoPage;
