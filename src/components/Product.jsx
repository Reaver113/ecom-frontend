import { useState } from "react"
import styled from "styled-components"

import Button from "./styled/Button"

const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: 0.3s;
	box-shadow: 0px 0px 8px 1px rgba(13,12,12,0.75);
	:hover {
		box-shadow: 0px 0px 20px 1px rgba(13,12,12,0.75)
	}
`


function Product(props) {
	const item = props.productInfo
	const [itemOnCart, setItemOnCart] = useState(0)

	function handleAddToCart() {
		setItemOnCart((prevState) => {
			return prevState + 1
		})
	}

	return (
		<Wrapper onClick={() => {
			props.setItem(item)
		}}>
			<img style = {{ height: 200 }}src = {item.image} alt="Bag"></img>
			<div>{item.title}</div>
			<div>{item.description}</div>
			<div>{item.price}</div>
			<div>Stock: {item.stock}</div>
			<div>Stock Left: {item.stock - itemOnCart}</div>
			<Button greaterThanFive={itemOnCart > 5} disabled={item.stock === itemOnCart} onClick={handleAddToCart} >
				{
					item.stock === itemOnCart ? "No Stock Left" : "Add To Cart"
				}
				</Button>
		</Wrapper>
	)
}

export default Product