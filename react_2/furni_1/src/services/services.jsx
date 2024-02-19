import React from "react";
import { Container ,Row ,Col } from "reactstrap";
import servicedate from "../servicesdate/servicedate"; 
import { motion } from "framer-motion";
import "./Services.css";
const Services = () => {

    return (
    <section className="services">
        <Container>
            <Row>
                { servicedate.map((item, index) => (
                        <Col lg="3" md="4" key={index}>
                        <motion.div whileHover={{scale:1.1}} className="service__item"
                         style={{background : `${item.bg}`}}>
                            <span><i class={item.icon}></i> 
                            </span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </motion.div>
                    
                    </Col>
                    ))
                }
               
            </Row>
        </Container>
    </section>
    )
};
export default Services;