import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

var moment = require("moment");

export const Blog = () => {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@KodingKidd`)
      .then(res => res.json())
      .then(response => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const finalData = mediumData.slice(0, 6);

  return (
    <Container className="center">
      {isLoading && <p>Fetching data from Medium!</p>}
      
      <Row>
        {finalData.map(article => (
          <Col md="4" className="mb-3 center" key={article.guid}>
            <Card className="inside-card center" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={article.thumbnail} />
              <Card.Body>
              <Card.Title><a href={article.link}>{article.title}</a></Card.Title>
              <Card.Subtitle>
                Published:{" "}
                {moment(article.pubDate).format("dddd, MMMM Do YYYY")}
              </Card.Subtitle>
            </Card.Body>
          </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};