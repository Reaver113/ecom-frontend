import { FormControlUnstyledContext } from "@mui/base"
import { Component } from "react"

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

class ProductClass extends Component {
	constructor(props) {
		super(props)
		console.log("constructor")
		this.state = {
			itemOnCart: 0
		}
	}

	componentDidMount() {
		console.log("mounted")
	}

	componentDidUpdate() {
		console.log("updated")
	}

	componentWillUnmount() {
		console.log("unmounted")
	}

	handleAddToCart = () => {
				this.setState((prevState) => {
					return {
						itemOnCart: prevState.itemOnCart + 1
					}
				})
		// setItemOnCart((prevState) => {
		// 	return prevState + 1
		// })
	}

	render() {
		const item = this.props.productInfo
		console.log("render")
		return (		
		<Wrapper onClick={() => {
			this.props.setItem(item)
		}}>
			<img style = {{ height: 200 }}src = {item.image} alt="Bag"></img>
			<div>{item.title}</div>
			<div>{item.description}</div>
			<div>{item.price}</div>
			<div>Stock: {item.stock}</div>
			<div>Stock Left: {item.stock - this.state.itemOnCart}</div>
			<Button greaterThanFive={this.state.itemOnCart > 5} disabled={item.stock === this.state.itemOnCart} onClick={this.handleAddToCart} >
				{
					item.stock === this.state.itemOnCart ? "No Stock Left" : "Add To Cart"
				}
				</Button>
		</Wrapper>
		)
	}
}

export default ProductClass