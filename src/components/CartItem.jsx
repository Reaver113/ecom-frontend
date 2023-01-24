function CartItem(props) {
	const item = props.item
	return (
		<div style = {{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		}}>
		<img style = {{ height: 200 }}src = {item.image} alt="Bag"></img>
		<div>{item.title}</div>
		<div>{item.description}</div>
		<div>${item.price}</div>
		<div style={{ marginTop: 5,}}>
			<button>-</button>
			<span style= {{margin: "0px 5px"}}>5</span>
			<button>+</button>
		</div>
	</div>
	

	)
}

export default CartItem