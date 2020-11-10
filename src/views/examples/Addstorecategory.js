import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Button,
    FormGroup,
   Col,
    Input,
    InputGroup,
} from "reactstrap";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "components/Headers/Header.js";


const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
];

class Addstorecategory extends React.Component {
    state = {};
    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className=" mt--5" fluid>
                    {/* Table */}
                    <Row>
                        <div className="">
                            <Card style={{  height: 450 }} className=" shadow">
                                <CardHeader className="  bg-transparent">


                                    <div className=" icon-examples">
                                        <Row>
                                            <Col style={{ width: 500, }} className="mb-5  lg='2' mb-xl-4" xl="6">
                                                <span style={{ fontSize: 20, fontWeight: "bold" }} className="text-darker ">Add Store Category</span>
                                            </Col>
                                            <Col style={{ width: 500, textAlign: 'end', }} className="mb-5  lg='2' mb-xl-4" xl="6">
                                                <Button style={{ width: 100, textAlign: 'center', borderRadius: 2 }} color="light">Back</Button>{' '}
                                                <Button style={{ width: 100, textAlign: 'center' }} color="light">Reset</Button>{' '}
                                                <Button style={{ width: 100, textAlign: 'center' }} color="info">Save</Button>{' '}
                                            </Col>
                                        </Row>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Row className=" icon-examples">


                                        <div className="container">
                                            <div className="row">

                                                <Col className="col-md-4">

                                                    <div >
                                                        <span className="text-darker text-sm">Category Name </span>
                                                    </div>

                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="Snack" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>
                                                </Col>
                                                <Col className="col-md-4">
                                                    <div >
                                                        <span className="text-darker text-sm">Parent Category</span>
                                                    </div>
                                                    <div style={{ borderRadius: 0, backgroundColor: "blue", }} className="col-md-0"></div>
                                                    <div >
                                                        <Select options={techCompanies} />
                                                    </div>
                                                    <div className="col-md-3"></div>

                                                </Col>
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Addstorecategory;
