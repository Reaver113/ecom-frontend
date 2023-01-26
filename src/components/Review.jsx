import { useState } from "react"
import Title from "./styled/Title"

const initalReviews = [
	{
		id: 1,
		description: "bad to use, do not reccomend"
	},
	{
		id: 2,
		description: "Good to use, highly reccomend"
	}
]

function Review() {

	const [reviews, setReviews] = useState(initalReviews)
	const [review, setReview] = useState("")
	const [showEditBox, setShowEditBox] = useState(false)
	const [editReviewId, setEditReviewId] = useState(null)
	const [editReviewDesc, setEditReviewDesc] = useState("")

	const handleOnChange = (e) => {
		setReview(e.target.value)
	}

	const addReview = (e) => {
		e.preventDefault()
		setReviews((prevReviews) => {
			return [
				...prevReviews,
				{id: prevReviews.length + 1, description: review}
			]
		})
		setReview("")
	}

	const deleteReview = (id) => {
		const newReviews = reviews.filter((review) => review.id !== id)
		setReviews(newReviews)
	}

	const editReview = (id) => {
		setShowEditBox(true)
		setEditReviewId(id)
		setEditReviewDesc(reviews.find((review) => review.id === id).description)
	}

	const handleEditReview = (e) => {
		setEditReviewDesc(e.target.value)
	}

	const handleEdit = () => {
		const newReviews = [...reviews]
		const reviewIndexToEdit = reviews.findIndex((review) => review.id === editReviewId)
		newReviews[reviewIndexToEdit].description = editReviewDesc
		setReviews(newReviews)
		setEditReviewDesc("")
		setShowEditBox(false)
	}

	return (
		<div style={{padding: 20}}>
		<Title>Review</Title>
		{reviews.map((review) => {
			return (
				<div key={review.id} style={{padding: '20px 0px'}}>
					<div>{review.description}</div>
					<button onClick={() => editReview(review.id)}>Edit</button>
					<button onClick={() => deleteReview(review.id)}>Delete</button>
				</div>
			)

		})}
		{showEditBox && (
			<div>
				<textarea value={editReviewDesc} onChange={handleEditReview}/>
				<div>
					<button onClick={handleEdit}>Save Edit</button>
				</div>
			</div>
		)}
		<form>
			<div>Add Review</div>
			<textarea value={review} onChange={handleOnChange} />
			<div>
				<button onClick={addReview}>Add</button>
			</div>
		</form>
		</div>
	)
}

export default Review