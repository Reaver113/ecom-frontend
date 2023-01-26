import Title from "./styled/Title";
import styled from "styled-components";
import { useState, local } from "react";
import axios from "axios";

const InputWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	width: 400px;
	margin-bottom: 10px;
`
function Login() {

	const [user, setUser] = useState({
		username: "",
		password: "",
	})

	const [errorMessage, setErrorMessage] = useState({
		username: null,
		password: null,
	})

	const [userFetched, setUserFetched] = useState(false)
	
	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(user)
		let haveError = false
		if(!user.username) {
			setErrorMessage((prevErrorMessage) => {
				return{
					...prevErrorMessage,
					username: "Username must be provided"
				}
			})
			haveError = true
		}
		if(!user.password) {
			setErrorMessage((prevErrorMessage) => {
				return {
					...prevErrorMessage,
					password: "Password must be provided"
				}
			})
			haveError = true
		}
		if(!haveError) {
			setErrorMessage({
				username: null,
				password: null,
				apiError: null,
			})
		axios.post("/auth/login", user)
			.then((res) => res.data)
			.then((json) => {
				setUserFetched(true)
				local.Storage.setItem("token", json.token)
				console.log(json)
			})
			.catch(() => {
				setErrorMessage((prevErrorMessage) => {
					return {
						...prevErrorMessage,
						apiError: "Username/Password does not exist"
					}
				})
			})
		}
	}

	const handleOnChange = (event) => {
		setUser((prevUser) => {
			return {
				...prevUser,
				[event.target.name]: event.target.value
			}
		})
	}

	return (
		<>
		{userFetched ? (
			<Title>Login Sucessful</Title>
		) : (
		<div>
			<Title>Login</Title>
			<form style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}} onSubmit={handleSubmit}>
				<InputWrapper>
					<label htmlFor="username">Username</label>
					<input type="text" name="username" value={user.username} onChange={handleOnChange}/>
				</InputWrapper>
				{errorMessage.username}
				<InputWrapper>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" value={user.password} onChange={handleOnChange}/>
				</InputWrapper>
				{errorMessage.password}
				<div>
					<input type="submit" value="Login" />
				</div>
				{errorMessage.apiError}
			</form>
		</div>
		)}
		</>
	)
}

export default Login