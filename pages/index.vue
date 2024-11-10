<script setup></script>

<template>
	<div class="container_wrap">
		<header>
			<div class="wrap_logo">
				<img src="../assets/img/logo.png" alt="logo" class="logotip" />
				<h2 class="title_logo">LEO<span>PARTS</span></h2>
			</div>
			<div class="total_inform">
				<p class="total_inform__location">Gorzow Wlkp. Welniany Rynek 5</p>
				<p class="total_inform__number">
					<img src="../assets/img/phone.png" alt="phone" /> +48-792-600-260
				</p>
			</div>
		</header>
		<main>
			<!-- <form class="form_contact">
				<h2 class="title_form">
					Wypełnij formularz zgłoszeniowy otrzymasz odpowiedź zwrotną!
				</h2>
			</form> -->
			<div class="form-container">
				<h2 class="title_form">
					Wypełnij formularz zgłoszeniowy<br />Otrzymasz odpowiedź zwrotną!
				</h2>
				<form>
					<input type="text" placeholder="Imię" required />
					<input type="tel" placeholder="Numer telefonu" required />
					<input type="email" placeholder="Email" required />
					<textarea placeholder="Komentarz" required></textarea>
					<button type="submit">Wysłać</button>
				</form>
			</div>
		</main>
		<section class="about_sell">
			<h2 class="about_sell__title">
				Co sprzedajemy
				<span
					>Rodzaje części zamiennych i ich <br />
					kategorie w naszej ofercie!</span
				>
			</h2>
			<div class="wrap_slider">
				<Slider></Slider>
			</div>
		</section>
	</div>
	<section class="price_section">
		<h2 class="price_section__title">Maintenance Service Packages</h2>
		<p class="price_section__desc">
			View pricing for additional car repair service packages
		</p>
	</section>
</template>

<style scoped lang="scss">
header {
	width: 100%;
	height: 10rem;
	padding: 0 10rem 0 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.wrap_slider:deep(.swiper) {
	padding-right: 4rem !important;
}
.price_section {
	padding: 8.4rem 36rem;
	// width: 99.6vw;
	background: #232a33;
	width: 100%;
}
.price_section__title {
	color: #fff;
	text-align: center;
	font-family: Raleway;
	font-size: 2.8rem;
	font-style: normal;
	font-weight: 800;
	line-height: 2.8rem; /* 100% */
	letter-spacing: 0.24rem;
	text-transform: uppercase;
	margin-bottom: 2.4rem;
}
.price_section__desc {
	color: #fff;
	text-align: center;
	font-family: Raleway;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: 400;
	line-height: 3.8rem; /* 158.333% */
	letter-spacing: 0.144rem;
	text-transform: uppercase;
}
.wrap_slider {
	width: 100%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
}
.about_sell__title {
	color: #000;
	text-align: center;
	font-family: Raleway;
	font-size: 4rem;
	font-style: normal;
	font-weight: 800;
	line-height: 4rem; /* 100% */
	letter-spacing: 0.24rem;
	text-transform: uppercase;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2.6rem;
	margin-bottom: 6rem;
	span {
		color: #2b2b2b;
		text-align: center;
		font-family: Raleway;
		font-size: 2rem;
		font-style: normal;
		font-weight: 400;
		line-height: 3.8rem; /* 158.333% */
		letter-spacing: 0.144rem;
		text-transform: uppercase;
	}
}

.about_sell {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 8rem 6rem 4rem 6rem;
}
.form-container {
	background-color: #b07c4e;
	padding: 2.6rem;
	border-radius: 8px;
	max-width: 50rem;
	max-height: 44.8rem;
	width: 100%;
	text-align: center;
	.title_form {
		color: #fff;
		font-family: Raleway;
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 900;
		line-height: 3rem; /* 150% */
		letter-spacing: 0.18rem;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		input,
		textarea {
			background-color: #ffffff;
			border: none;
			border-radius: 4px;
			padding: 10px;
			height: 4rem;
			color: #232a33;
			font-family: Raleway;
			font-size: 1.4rem;
			font-style: normal;
			font-weight: 400;
			line-height: 2.4rem; /* 133.333% */
		}

		textarea {
			resize: none;
			height: 80px;
		}

		button {
			background-color: #333333;
			border: none;
			border-radius: 4px;
			padding: 10px;
			color: #fff;
			text-align: center;
			font-family: Raleway;
			font-size: 1.4rem;
			font-style: normal;
			font-weight: 700;
			line-height: 2.7rem; /* 150% */
			letter-spacing: 0.108rem;
			text-transform: uppercase;
			cursor: pointer;
			transition: background-color 0.3s;

			&:hover {
				background-color: darken(#333333, 10%);
			}
		}
	}
}
.form_contact {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
}
main {
	display: flex;
	width: 100%;
	min-height: 66rem;
	background-image: url(../assets/img/backgro.png);
	background-size: contain;
	background-position: right;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 2rem 8rem;
}

.total_inform__location {
	color: #2b2b2b;
	font-family: Raleway;
	font-size: 1.8rem;
	font-style: normal;
	font-weight: 400;
	line-height: 2.1875rem; /* 194.444% */
}
.total_inform__number {
	color: #000;
	font-family: Raleway;
	font-size: 3rem;
	font-style: normal;
	font-weight: 700;
	line-height: 3rem; /* 100% */
	text-transform: uppercase;
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	justify-content: center;
}
.total_inform__number img {
	width: 4rem;
}
.title_logo {
	color: #000;
	font-family: Poppins;
	font-size: 2rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	text-transform: uppercase;
}
.title_logo span {
	color: #a06824;
	font-family: Poppins;
	font-size: 2rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	text-transform: uppercase;
}
.total_inform {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5rem;
}
.container_wrap {
	max-width: 134rem;
	width: 100%;
	height: 100%;
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.logotip {
	height: 8.7rem;
	width: 9.6rem;
}
body {
	background-color: black !important;
}
.wrap_logo {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}
</style>
