import { AppBar, Box, Button, Container, Toolbar } from "@mui/material"

function NavBar() {
	const navBarItems = [
		{
			title: "Products",
			id: "#products"
		},
		{
			title: "Add Product",
			id: "#addProduct"
		},
		{
			title: "Cart",
			id: "#cart"
		}
]
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{flexGrow: 1, display: "flex"}}>
						{
							navBarItems.map((item) => {
								return(
									<a key={item.title} style={{textDecoration: "none"}} href={item.id}>
						<Button sx={{ my: 2, color: "white", display: "block"}}>{item.title}</Button>
						</a>
								)
							})
						}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default NavBar