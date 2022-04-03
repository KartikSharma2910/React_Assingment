import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Trigger from "../Triggers";
import "./style.css";
import styles from "./styles";

const PageLayout = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loadingData, setLoadingData] = useState(true);
  const hoverLast: any = data.slice(-2);

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setData(response.data);
      setLoadingData(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData(`https://picsum.photos/v2/list/?page=${page}&size=30`);
  }, [page]);

  if (loadingData) {
    return <h2>Loading Data Please Wait!!</h2>;
  }

  return (
    <Box sx={styles.Wrapper}>
      <Box sx={styles.heading}>WELCOME TO WALLPAPER GALLERY</Box>
      {data.map((item: any) => {
        return (
          <Box sx={styles.card} className="card">
            <img
              src={item.download_url}
              alt="Loading..."
              className="cardImage"
            />
            <Link className="routeLink" to={`/InfoPage/${item.id}`}>
              <Box sx={styles.info} className="info">
                <p>Author Name</p>
                <h4
                  style={{
                    color: "#3399ff",
                  }}
                >
                  <b>{item.author}</b>
                </h4>
                <h4 className="hoverEffect">
                  {item.id === hoverLast[0].id ||
                  item.id === hoverLast[1].id ? (
                    <Box>{`Hey! you hovered wallpaper whose id is -> ${item.id}`}</Box>
                  ) : (
                    <Box></Box>
                  )}
                </h4>
              </Box>
            </Link>
          </Box>
        );
      })}
      <Trigger onClick={() => setPage(page - 1)} title="Previous" />
      <Trigger onClick={() => setPage(page + 1)} title="Next" />
    </Box>
  );
};

export default PageLayout;
