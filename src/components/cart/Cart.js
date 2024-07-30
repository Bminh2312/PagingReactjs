import React from 'react'
import { Button, Container, Table } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem , minusItem, addMoreItem} from '../../redux/addToCartSlice'
import Swal from 'sweetalert2'


export default function Cart() {
const {items, status, error} = useSelector(state => state.cart)



const handle_sum = () =>{
    let total = 0
    items.map((item)=>{
        total = total + (item.price*item.quantity)

     })
     return total;
}

const dispatch = useDispatch()
  return (
    <div>
            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>Quantity</th>
                            <th>
                                Price
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           items&&items.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">
                                        {index + 1}
                                    </th>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {
                                            (item.quantity<=1)?<></>:<Button onClick={()=>dispatch(minusItem(item.id))}>-</Button>
                                        }
                                        <span style={{marginLeft:'10px',marginRight:'10px'}}>{item.quantity}</span>
                                        <Button onClick={()=>dispatch(addMoreItem(item.id))}>+</Button>
                                    </td>
                                    <td>{item.price * item.quantity}$</td>
                                    <td>
                                        <Button className='btn btn-danger' onClick={()=>{
                                            Swal.fire({
                                                title: "Are you sure?",
                                                text: "You won't be able to revert this!",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: "Yes, delete it!"
                                              }).then((result) => {
                                                if (result.isConfirmed) {
                                                  Swal.fire({
                                                    title: "Deleted!",
                                                    text: "Your file has been deleted.",
                                                    icon: "success"
                                                  });
                                                  dispatch(removeItem(item.id))
                                                }
                                              });
                                            }}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
            <h1 style={{textAlign:'center'}} >Total: {handle_sum()} </h1>

        </div>
  )
}
