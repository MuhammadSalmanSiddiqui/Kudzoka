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

class Addpromo extends React.Component {
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
                            <Card style={{ width: 1000, }} className=" shadow">
                           
                                <CardBody>

                                <Row className=" container icon-examples"> 
                                <div style={{ width: 150, }}className="  radio">
                                                    <label>
                                                        <input type="radio" value=" option1" checked={true} />
                                                        For ALL USERS
                                                    </label>
                                                    </div>

                                                    <div className="radio">
                                                    <label>
                                                        <input type="radio" value=" option1" checked={true} />
                                                          FIRST TIME USE ONLY
                                                    </label>
                                                    </div>
                                        
                                </Row>
                                    <Row className=" icon-examples">


                                        <div className="container">
                                            <div className="row">

                                                <Col className="col-md-5">
                                                   
                                                    <div >
                                                        <span className="text-darker text-sm">Promo Code Name* </span>
                                                    </div>

                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="Snack" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>


                                                    <div >
                                                        <span className="text-darker text-sm">Promo Code Discount*</span>
                                                    </div>
                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="Snack" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>


                                                    <div >
                                                        <span className="text-darker text-sm">Promo Bearer*</span>
                                                    </div>
                                                    <div style={{ borderRadius: 0, backgroundColor: "blue", }} className="col-md-0"></div>
                                                    <div >
                                                        <Select options={techCompanies} />
                                                    </div>
                                                    <div className="col-md-3"></div>


                                                   
                                                    <div >
                                                        <span className="text-darker text-sm">Comission ON*</span>
                                                    </div>
                                                    <div style={{ borderRadius: 0, backgroundColor: "blue", }} className="col-md-0"></div>
                                                    <div >
                                                        <Select options={techCompanies} />
                                                    </div>
                                                    <div className="col-md-3"></div>


                                                    <div >
                                                        <span className="text-darker text-sm">No.of Redeems Allowed(per user)*</span>
                                                    </div>
                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="Snack" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>
                                                </Col>




                                                <Col className="col-md-5">
                                                
                                                    
                                                    <div >
                                                        <span className="text-darker text-sm">Promo Code Description *</span>
                                                    </div>
                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="Snack" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>


                                                    <div >
                                                        <span className="text-darker text-sm">Minimum Basket Value *</span>
                                                    </div>
                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="Snack" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>


                                                    <div >
                                                        <span className="text-darker text-sm">Promo Type *</span>
                                                    </div>
                                                    <div style={{ borderRadius: 0, backgroundColor: "blue", }} className="col-md-0"></div>
                                                    <div >
                                                        <Select options={techCompanies} />
                                                    </div>
                                                    <div className="col-md-3"></div>

                                                    <div >
                                                        <span className="text-darker text-sm">Total No Of Voucher *</span>
                                                    </div>
                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="Snack" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>
                                                    <div >
                                                        <span className="text-darker text-sm">Promo Code Validity *</span>
                                                    </div>
                                                    <FormGroup>
                                                        <InputGroup style={{ borderRadius: 2, borderBlockColor: "black", border: 10 }} className="input-group mb-3">

                                                            <Input placeholder="Snack" type="email" autoComplete="new-email" />
                                                        </InputGroup>
                                                    </FormGroup>
                                                    <Row >
                                                     <Col style={{ width:1000, textAlign:'end',  }} className="mb-8  lg='2' mb-xl-4" xl="12">
                                                     <Button style={{ width: 100, textAlign: 'center', borderRadius: 2 }} color="info">Save</Button>{' '}     
                                                     </Col>   
                                                    
                                                   </Row>
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

export default Addpromo;
