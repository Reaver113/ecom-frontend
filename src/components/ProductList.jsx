import styled from "styled-components"

import Product from "./Product"
import Title from "./styled/Title"
import GridBox from "./styled/GridBox"

const CustomGrid = styled(GridBox)`
	padding: 30px;
`

function ProductList() {
	const items = [
		{
			id: 1,
			title: "Bag",
			price: 50,
			description: "Bags for every occasion",
			category: "men's Clothing",
			image: "https://robohash.org/bag",
			rating: {
				rate: 4,
				count: 100,
			},
			stock: 10,
		},
		{
			id: 2,
			title: "Phone",
			price: 500,
			description: "Phones for every occasion",
			category: "Electronics",
			image: "https://robohash.org/phone",
			rating: {
				rate: 3,
				count: 20,
			},
			stock: 10,
		},
		{
			id: 3,
			title: "Laptop",
			price: 5000,
			description: "Laptops for every occasion",
			category: "Electronics",
			image: "https://robohash.org/laptop",
			rating: {
				rate: 5,
				count: 300,
			},
			stock: 10,
		},
		{
			id: 4,
			title: "Bag",
			price: 50,
			description: "Bags for every occasion",
			category: "men's Clothing",
			image: "https://robohash.org/bag",
			rating: {
				rate: 4,
				count: 100,
			},
			stock: 10,
		},
		{
			id: 5,
			title: "Phone",
			price: 500,
			description: "Phones for every occasion",
			category: "Electronics",
			image: "https://robohash.org/phone",
			rating: {
				rate: 3,
				count: 20,
			},
			stock: 10,
		},
		{
			id: 6,
			title: "Laptop",
			price: 5000,
			description: "Laptops for every occasion",
			category: "Electronics",
			image: "https://robohash.org/laptop",
			rating: {
				rate: 5,
				count: 300,
			},
		},
		{
			id: 7,
			title: "Bag",
			price: 50,
			description: "Bags for every occasion",
			category: "men's Clothing",
			image: "https://robohash.org/bag",
			rating: {
				rate: 4,
				count: 100,
			},
			stock: 10,
		},
		{
			id: 8,
			title: "Phone",
			price: 500,
			description: "Phones for every occasion",
			category: "Electronics",
			image: "https://robohash.org/phone",
			rating: {
				rate: 3,
				count: 20,
			},
			stock: 10,
		},
		{
			id: 9,
			title: "Laptop",
			price: 5000,
			description: "Laptops for every occasion",
			category: "Electronics",
			image: "https://robohash.org/laptop",
			rating: {
				rate: 5,
				count: 300,
			},
			stock: 10,
		},
	]

	return (
		<div id="products">
		<Title>Products</Title>
		<CustomGrid>
			{
				items.map((item) => {
					return (
						<Product key={item.id} productInfo={item} />
					)
				})
			}
		</CustomGrid>
		</div>
	)
}

export {ProductList}