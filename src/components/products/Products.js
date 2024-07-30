
import React, { useState,useEffect } from 'react'
import { Button, Container, Row } from 'reactstrap'
import Product from '../product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { pageProducts, fetchProducts } from '../../redux/productSlice'
import '../products/products.css'
export default function Products() {

  const dispatch = useDispatch();

  const {items, status, total, error} = useSelector(state => state.products)

  const [page,setPage] = useState(1)
  useEffect(()=>{
    if(status === 'start'){
      dispatch(fetchProducts())
    }
    dispatch(pageProducts({page: page,limit:5}));
  },[page])

  console.log(page)

  const pages = Math.ceil(total/5)
  const pagesList = []
  for (let i = 0; i < pages; i++){
    pagesList.push(i+1)
  }

  if(status === "loading") return <div className='loader-container'></div>

  if(status === "faild") return <div>{error}</div>




  return (
    <div>
      <Container >
        <Row>
          {
            items&&items.map((item, index) => {
              return<Product key={index} product={item} />
            })
          }
        </Row>
            {page===1?"":<Button onClick={()=>setPage(pagesList[0])}>First</Button>}
            {page===1?"":<Button onClick={()=>setPage(page-1)}>Pre</Button>}
            {page===1?"":<Button onClick={()=>setPage(page-1)}>{page-1}</Button>}
            <Button onClick={()=>setPage(page)} style={{color: "red"}}>{page}</Button>
            {page===pagesList[pagesList.length -1]?"":<Button onClick={()=>setPage(page+1)}>{page+1}</Button>}
            {page===pagesList[pagesList.length -1]?"":<Button onClick={()=>setPage(page+1)}>Next</Button>}
            {page===pagesList[pagesList.length -1]?"":<Button onClick={()=>setPage(pagesList[pagesList.length -1])}>Last</Button>}
      </Container>
    </div>
  )
}
