import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/addToCartSlice'
import Swal from 'sweetalert2'

export default function Product(props) {
    const { product } = props

    const {items, status, error} = useSelector(state => state.cart)
    const dispatch = useDispatch();
    // console.log(product)
   
    return (
        
            <Col lg={3} md={4} sm={6} xs={6} className='' >
                <Card 
                    style={{
                        width: '18rem',
                        textAlign: 'center'
                    }}
                >
                    <img
                        alt="Sample"
                        src={product.img}
                    />
                    
                    <CardBody>
                        <CardTitle tag="h5">
                            {product.name}
                        </CardTitle>
                        <CardSubtitle 
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {product.description}
                        </CardSubtitle>
                        <CardText>
                            Price: {product.price}
                        </CardText>
                        <Button color='primary' onClick={()=>{
                            dispatch(addItem(product))
                            Swal.fire({
                                title: "Add Succeesfull!",
                                text: "Please choose more item. :))",
                                icon: "success"
                              });
                        }}>
                            Add to cart
                        </Button>
                     </CardBody> 
                </Card>
            </Col>
       
    )
}
