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
	return (
		<Wrapper>
			<img style = {{ height: 200 }}src = {item.image} alt="Bag"></img>
			<div>{item.title}</div>
			<div>{item.description}</div>
			<div>{item.price}</div>
			<Button>Add To Cart</Button>
		</Wrapper>
	)
}

export default Product