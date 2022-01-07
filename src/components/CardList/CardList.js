import React from "react";
import { Card, Row, Col} from "react-bootstrap";
import Items from "./giftlist.json";

const CardList = props => 
    (<Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
        {Items.filter(item => item.available).map((item, idx) => (
            <Col key={idx} sm={4}>
                <Card style={{
                    height: "100%",
                    margin: "1rem",
                    padding: "1rem"}}>
                    <Card.Img
                        style={{objectFit: "contain", height: "75%" }}
                        variant="top"
                        src={require(`./img/${item.image}`)}/>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            <a href={item.link}>Ver modelo de referência</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>);

export default CardList;