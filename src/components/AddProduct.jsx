import styled from "styled-components"
import Title from "./styled/Title"
import { useState } from "react"
import axios from "axios"

const InputWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	width: 400px;
	margin-bottom: 10px;
`

function AddProduct() {
	
	// const [title, setTitle] = useState("")
	// const [description, setDescription] = useState("")

	const [product, setProduct] = useState({
		title: "",
		description: "",
		price: 0,
		stock: 0,
	})

	const [errorMessage, setErrorMessage] = useState(null)

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log("submitted")
		console.log(product)

		if (!product.title) {
			setErrorMessage("Please provide a title")
		} else if (!product.price) {
			setErrorMessage("Please provide a price")
		} else {
			setErrorMessage(null)
		axios.post("/products", product)
		.then((res) => res.data)
		.then((json) => console.log(json))
		}
		}


	const handleOnChange = (event) => {
		console.log(event.target.name)
		console.log(event.target.value)
		setProduct((prevProduct) => {
			return {
				...prevProduct,
				[event.target.name]: event.target.value
			}
		})
	}

	// const handleTitleChange = (event) => {
	// 	setTitle(event.target.value)
	// }

	// const handleDescriptionChange = (event) => {
	// 	setDescription(event.target.value)
	// }

	return (
		<div id="addProduct">
			<Title>Add Product</Title>
			<form style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}} onSubmit={handleSubmit}>
				<InputWrapper>
					<label htmlFor="title">Title:</label>
					<input type="text" name="title" value={product.title} onChange={handleOnChange}/>
				</InputWrapper>
				<InputWrapper>
					<label htmlFor="description">Description:</label>
					<input type="text" name="description" value={product.description} onChange={handleOnChange} />
				</InputWrapper>
				<InputWrapper>
					<label htmlFor="image">Image:</label>
					<input type="file" name="image" accept=".png, .jpg, .jpeg"/>
				</InputWrapper>
				<InputWrapper>
					<label htmlFor="price">Price:</label>
					<input type="number" name="price" value={product.price} onChange={handleOnChange}/>
				</InputWrapper>
				<InputWrapper>
					<label htmlFor="stock">Stock:</label>
					<input type="number" name="stock" value={product.stock} onChange={handleOnChange}/>
				</InputWrapper>
				<div>
					<input type="submit" value="Add Product" />
				</div>
				<div>
					{errorMessage}
				</div>
			</form>
		</div>
	)
}

export default AddProduct