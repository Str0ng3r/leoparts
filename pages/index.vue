<script setup>
import axios from 'axios';

const name = ref('');
const mail = ref('');
const comment = ref('');
const phoneNumb = ref('');

const submitForm = async (event) => {
	// Предотвращаем стандартное поведение формы, чтобы избежать перезагрузки страницы
	event.preventDefault();

	// Формируем данные для отправки
	const formData = {
		name: name.value,
		email: mail.value,
		comment: comment.value,
		number: Number(phoneNumb.value),
	};

	try {
		// Отправляем POST-запрос на указанный API endpoint
		console.log(formData);
		const response = await axios.post(
			'https://673266dd2a1b1a4ae10fdd21.mockapi.io/applications',
			formData
		);
		console.log('Форма успешно отправлена:', response.data);
		name.value = '';
		mail.value = '';
		comment.value = '';
		phoneNumb.value = '';
		// Здесь можно добавить код для обработки успешной отправки, например, очистить форму или показать сообщение пользователю
	} catch (error) {
		console.error('Ошибка при отправке формы:', error);
		// Здесь можно добавить код для обработки ошибок
	}
};
</script>

<template>
	<div class="container_wrap">
		<header>
			<div class="wrap_logo" data-aos="fade-down">
				<img src="../assets/img/logo.png" alt="logo" class="logotip" />
				<h2 class="title_logo">LEO<span>PARTS</span></h2>
			</div>
			<div class="total_inform" data-aos="fade-down">
				<p class="total_inform__location">Gorzow Wlkp. Welniany Rynek 5</p>
				<p class="total_inform__number">
					<img src="../assets/img/phone.png" alt="phone" /> +48-792-600-260
				</p>
			</div>
		</header>
		<main data-aos="fade-left">
			<!-- <form class="form_contact">
				<h2 class="title_form">
					Wypełnij formularz zgłoszeniowy otrzymasz odpowiedź zwrotną!
				</h2>
			</form> -->
			<div class="form-container" data-aos="fade-right">
				<h2 class="title_form">
					Wypełnij formularz zgłoszeniowy<br />Otrzymasz odpowiedź zwrotną!
				</h2>
				<form @submit="submitForm">
					<input type="text" placeholder="Imię" required v-model="name" />
					<input
						type="tel"
						placeholder="Numer telefonu"
						required
						v-model="phoneNumb"
					/>
					<input type="email" placeholder="Email" required v-model="mail" />
					<textarea
						placeholder="Komentarz"
						required
						v-model="comment"
					></textarea>
					<button type="submit">Wysłać</button>
				</form>
			</div>
		</main>
		<section class="about_sell">
			<h2 class="about_sell__title" data-aos="fade-up">
				Co sprzedajemy
				<span
					>Rodzaje części zamiennych i ich <br />
					kategorie w naszej ofercie!</span
				>
			</h2>
			<div class="wrap_slider" data-aos="fade-up">
				<Slider></Slider>
			</div>
		</section>
	</div>
	<section class="price_section">
		<h2 class="price_section__title" data-aos="fade-up">
			Maintenance Service Packages
		</h2>
		<p class="price_section__desc" data-aos="fade-up">
			View pricing for additional car repair service packages
		</p>
	</section>
	<div class="container_wrap">
		<section class="about_services">
			<h2 class="about_services__title" data-aos="fade-up">
				Dlaczego jesteśmy najlepszym wyborem?
			</h2>
			<p class="about_services__desc" data-aos="fade-up">
				Usługi i jakość, które gwarantujemy naszym klientom
			</p>
			<div class="wrap_points">
				<div class="wrap_point_text" data-aos="fade-right">
					<img src="../assets/img/knowledge.png" alt="brain" />
					<h2>
						Profesjonalne doradztwo i dobór części zamiennych do Twojego
						samochodu!
					</h2>
				</div>
				<div class="wrap_point_text" data-aos="fade-up">
					<img src="../assets/img/delivery.png" alt="delivery" />
					<h2>Szybka dostawa zamówień w ciągu 6 godzin</h2>
				</div>
				<div class="wrap_point_text" data-aos="fade-left">
					<img src="../assets/img/badge.png" alt="badge" />
					<h2>Wysokiej jakości części zamienne tylko od zaufanych dostawców</h2>
				</div>
			</div>
		</section>
	</div>
	<section class="section_number">
		<h1 data-aos="fade-up">Zadzwoń do nas</h1>
		<p data-aos="fade-up">Szybko odpowiadamy, szybko pomagamy!</p>
		<h2 data-aos="fade-up">
			<img src="../assets/img/big_phone.png" alt="phone" /> +48-792-600-260
		</h2>
	</section>
	<div class="container_wrap">
		<section class="reviews">
			<h2 data-aos="fade-up">
				<nuxt-icon name="reviews" filled></nuxt-icon>OPINIE
			</h2>
			<div class="wrap_slider_review" data-aos="fade-up">
				<ReviewSlider></ReviewSlider>
			</div>
		</section>
	</div>
	<section class="map_location" data-aos="fade-up">
		<div class="map_overlay"></div>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2416.0113268289233!2d15.236337776957845!3d52.731988020512716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47071f30103882e9%3A0xaba5b319c2d41567!2sLeoParts%20sklep%20motoryzacyjny.Auto-Cz%C4%99%C5%9Bci!5e0!3m2!1sru!2spl!4v1731274496164!5m2!1sru!2spl"
			width="100%"
			height="450"
			style="border: 0"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</section>
	<footer>
		<h1 class="footer__title" data-aos="fade-up">kontakty</h1>
		<div class="wrap_form_contacts">
			<div class="footer__left_wrapper" data-aos="fade-right">
				<p>
					<nuxt-icon name="street" filled></nuxt-icon>Wełniany Rynek 5, 66-400
					Gorzów Wielkopolski
				</p>
				<p><nuxt-icon name="phone_footer" filled></nuxt-icon>+48-792-600-260</p>
				<p>
					<nuxt-icon name="clock" filled></nuxt-icon>pn-pj 8:00 - 16:00
					,sob(8:00 - 13:30)
				</p>
				<p><nuxt-icon name="mails" filled></nuxt-icon>leoparts21@gmail.com</p>
			</div>
			<div class="footer__right_wrapper" data-aos="fade-left">
				<form class="footer__form" @submit="submitForm">
					<input type="text" placeholder="Imię" required v-model="name" />
					<input
						type="tel"
						placeholder="Numer telefonu"
						required
						v-model="phoneNumb"
					/>
					<input type="email" placeholder="Email" required v-model="mail" />
					<textarea
						placeholder="Komentarz"
						required
						v-model="comment"
					></textarea>
					<button class="footer__form_button" type="submit">Wysłać</button>
				</form>
			</div>
		</div>
	</footer>
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
.footer__form_button {
	color: #fff;
	text-align: center;
	font-family: Raleway;
	font-size: 1.8rem;
	font-style: normal;
	font-weight: 700;
	line-height: 2.7rem; /* 150% */
	letter-spacing: 0.108rem;
	text-transform: uppercase;
	border: 2px solid #1caffc;
	background: #a06824;
	padding: 1.4rem 2rem;
}
.footer__form {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	width: 100rem;
	max-width: 57rem;
	gap: 2rem;
	input {
		border-radius: 0.2rem;
		border: 2px solid #374351;
		background: transparent;
		color: #fff;
		font-family: Raleway;
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.4rem; /* 133.333% */
		padding: 1.3rem 1.8rem;
		width: 100%;
		::placeholder {
			color: #fff;
			font-family: Raleway;
			font-size: 1.8rem;
			font-style: normal;
			font-weight: 400;
			line-height: 2.4rem; /* 133.333% */
		}
	}
	textarea {
		border-radius: 0.2rem;
		border: 2px solid #374351;
		background: transparent;
		color: #fff;
		font-family: Raleway;
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.4rem; /* 133.333% */
		padding: 1.3rem 1.8rem;
		width: 100%;
		::placeholder {
			color: #fff;
			font-family: Raleway;
			font-size: 1.8rem;
			font-style: normal;
			font-weight: 400;
			line-height: 2.4rem; /* 133.333% */
		}
	}
}
.footer__left_wrapper {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: flex-start;
	p {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-family: Raleway;
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 400;
		line-height: 3rem; /* 250% */
		margin-bottom: 1rem;
		gap: 1rem;
	}
}
.footer__right_wrapper {
	align-items: flex-start;
	flex-direction: column;
	justify-content: flex-start;
}
.wrap_form_contacts {
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 9rem;
}
footer {
	background: #232a33;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 8.4rem 0rem 3rem 0rem;
}
.footer__title {
	color: #fff;
	text-align: center;
	font-family: Raleway;
	font-size: 4rem;
	font-style: normal;
	font-weight: 800;
	line-height: 4rem; /* 100% */
	letter-spacing: 0.24rem;
	text-transform: uppercase;
	margin-bottom: 3.6rem;
}
.map_location {
	width: 100%;
	background: #212121 0.7;
	position: relative;
	height: 45rem;
}
.map_overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4); /* Чорний колір із прозорістю */
	pointer-events: none; /* Забороняє взаємодію з шаром, щоб мапу можна було гортати */
}
.wrap_points {
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 1rem;
	margin-top: 4rem;
	width: 100%;
}
.wrap_slider_review {
	display: flex;
	max-width: 40rem;
	overflow: hidden;
}
.reviews {
	padding: 9rem 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	h2 {
		color: #2b2b2b;
		text-align: center;
		font-family: Raleway;
		font-size: 4rem;
		font-style: normal;
		font-weight: 800;
		line-height: 4rem; /* 100% */
		letter-spacing: 0.24rem;
		text-transform: uppercase;
		gap: 1rem;
		display: flex;
		margin-bottom: 4rem;
	}
}
.section_number {
	width: 100%;
	height: 52rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 15rem 0;
	background-image: url('../assets/img/back_number.png');
	background-attachment: fixed;
	background-size: cover;
	h1 {
		color: #fff;
		text-align: center;
		font-family: Raleway;
		font-size: 4rem;
		font-style: normal;
		font-weight: 800;
		line-height: 4rem; /* 100% */
		letter-spacing: 0.24rem;
		text-transform: uppercase;
		margin-bottom: 2.8rem;
	}
	p {
		color: #fff;
		text-align: center;
		font-family: Raleway;
		font-size: 2.4rem;
		font-style: normal;
		font-weight: 400;
		line-height: 3.8rem; /* 158.333% */
		letter-spacing: 0.144rem;
		text-transform: uppercase;
		margin-bottom: 3rem;
	}
	h2 {
		color: #fff;
		text-align: center;
		/* demo.templatemonster.com/Semantic/Link */
		font-family: Raleway;
		font-size: 8rem;
		font-style: normal;
		font-weight: 800;
		line-height: 9.7rem; /* 121.25% */
		letter-spacing: 0.48rem;
		text-transform: uppercase;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		gap: 1rem;
		img {
			width: 10rem;
		}
	}
}
.wrap_slider:deep(.swiper) {
	padding-right: 4rem !important;
}
.wrap_point_text {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	max-width: 20rem;
	img {
		width: 100%;
	}
	h2 {
		color: #2b2b2b;
		text-align: center;
		font-family: Raleway;
		font-size: 1.2rem;
		font-style: normal;
		font-weight: 800;
		line-height: 1.8rem; /* 100% */
		letter-spacing: 0.24rem;
		text-transform: uppercase;
	}
}
.about_services__title {
	color: #2b2b2b;
	text-align: center;
	font-family: Raleway;
	font-size: 4rem;
	font-style: normal;
	font-weight: 800;
	line-height: 4rem; /* 100% */
	letter-spacing: 0.24rem;
	text-transform: uppercase;
	margin-bottom: 2.7rem;
}
.about_services__desc {
	color: #2b2b2b;
	text-align: center;
	font-family: Raleway;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: 400;
	line-height: 3.8rem; /* 158.333% */
	letter-spacing: 0.144rem;
	text-transform: uppercase;
}
.about_services {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 8rem 2rem;
	width: 100%;
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
