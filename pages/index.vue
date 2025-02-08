<script setup>
import axios from 'axios';

const name = ref('');
const mail = ref('');
const comment = ref('');
const phoneNumb = ref('');
const sendMail = async () => {
	event.preventDefault();
	try {
		const templateParams = {
			name: name.value,
			email: mail.value,
			message: comment.value,
			number: Number(phoneNumb.value),
		};

		const response = await emailjs.send(
			'service_ils8llq', // Замени на свой Service ID
			'template_lt7zh22', // Замени на свой Template ID
			templateParams,
			'GnmHBjiFEu_ST15NK' // Твой Public Key
		);

		console.log('Письмо успешно отправлено:', response);
		alert('Ваше сообщение отправлено!');

		// Очищаем форму после успешной отправки
		name.value = '';
		mail.value = '';
		comment.value = '';
		phoneNumb.value = '';
	} catch (error) {
		console.error('Ошибка при отправке письма:', error);
		alert('Ошибка при отправке письма. Попробуйте позже.');
	}
};
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
					<nuxt-icon name="phone_footer" filled></nuxt-icon> +48-792-600-260
				</p>
			</div>
		</header>
		<main data-aos="fade-left">
			<!-- <form class="form_contact">
				<h2 class="title_form">
					Wypełnij formularz zgłoszeniowy otrzymasz odpowiedź zwrotną!
				</h2>
			</form> -->
			<!-- <a
				href="tel:
792 600 260"
				class="button_napisz"
				>Zadzwoń do nas już teraz</a
			> -->
			<div class="form-container" data-aos="fade-right">
				<h2 class="title_form">
					Wypełnij formularz zgłoszeniowy<br />Otrzymasz odpowiedź zwrotną!
				</h2>
				<form @submit="sendMail">
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
						maxlength="200"
					></textarea>
					<button type="submit">Wysłać</button>
				</form>
			</div>
		</main>
		<section class="about_sell">
			<h2 class="about_sell__title" data-aos="fade-up">
				Co sprzedajemy?
				<span
					>różne rodzaje części zamiennych i ich <br />
					kategorie w naszej ofercie!</span
				>
			</h2>
			<div class="wrap_slider" data-aos="fade-up">
				<Slider></Slider>
			</div>
		</section>
	</div>
	<section class="price_section">
		<h2 class="price_section__title" data-aos="fade-up">Niskie ceny</h2>
		<p class="price_section__desc" data-aos="fade-up">
			Napisz do nas, aby zapytać o szczegóły i dostępne opcje
		</p>
		<div class="wrap_prices">
			<div class="wrap_price_left" data-aos="fade-up">
				<p>Amortyzacja od 100 zł</p>
				<p>Zawieszenia od 30 zł</p>
				<p>Filtry od 20zł</p>
				<p>Hamulce od 40 zł</p>
				<p>Opony od 300 zł</p>
			</div>
			<div class="middl_line" data-aos="fade-up"></div>
			<div class="wrap_price_right" data-aos="fade-up">
				<p>Oleje i płyny od 10zł</p>
				<p>Układ wydechowy Od 15zł</p>
				<p>Paski,łańcuchy,rolki od 40zł</p>
				<p>Silnik/Osprzęt od 10zł</p>
				<p>Pozostała kategoria Niskie ceny</p>
			</div>
		</div>
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
					<h2>Profesjonalne doradztwo i dobór części zamiennych</h2>
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
			<img src="../assets/img/phone.png" alt="phone" /> +48-792-600-260
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
		<h1 class="footer__title" data-aos="fade-up">kontakt</h1>
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
				<div class="wrap_icons">
					<a href="tel:+48792600260"
						><nuxt-icon name="whatsapp" filled class="whatsapp_icon"></nuxt-icon
					></a>
					<a href="https://www.facebook.com/profile.php?id=61566843227111"
						><nuxt-icon name="facebook" filled class="facebook_icon"></nuxt-icon
					></a>
					<a
						href="https://www.instagram.com/leoparts_sklep_motoryzacjny?utm_source=qr&igsh=MWU1aXJ0M3E0MGV6cw=="
						><nuxt-icon
							name="instagram"
							filled
							class="instagram_icon"
						></nuxt-icon
					></a>
				</div>
			</div>
			<div class="footer__right_wrapper" data-aos="fade-left">
				<form class="footer__form" @submit="sendMail">
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
						maxlength="200"
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
	@include t {
		flex-direction: column;
		height: auto;
		padding: 0 4rem;
	}
}
.whatsapp_icon:hover.whatsapp_icon:deep(svg > path) {
	fill: #4da560;
}
.whatsapp_icon:hover {
	cursor: pointer;
}
.facebook_icon:hover.facebook_icon:deep(svg > path) {
	fill: #506dee;
}
.facebook_icon:hover {
	cursor: pointer;
}
.instagram_icon:hover.instagram_icon:deep(svg > path) {
	fill: #a750ee;
}
.instagram_icon:hover {
	cursor: pointer;
}
.wrap_icons {
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	margin-top: 1rem;
	@include m {
		margin: 0 auto;
	}
}
.total_inform__location {
	color: #2b2b2b;
	font-family: Raleway;
	font-size: 1.8rem;
	font-style: normal;
	font-weight: 400;
	line-height: 2.1875rem; /* 194.444% */
	@include mob {
		font-size: 1.4rem;
	}
}
.button_napisz {
	color: #ffffff;
	font-family: Raleway;
	font-size: 1.8rem;
	font-style: normal;
	text-align: center;
	font-weight: 600;
	line-height: 2.1875rem; /* 194.444% */
	background-color: #a06824;
	padding: 2rem;
	width: 50%;
	border-radius: 1rem;
	@include m {
		width: 100%;
	}
}
.button_napisz:hover {
	color: #ffffff;
	font-family: Raleway;
	font-size: 2rem;
	font-weight: 700;
	font-style: normal;
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
	@include m {
		font-size: 2.4rem;
	}
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
	@include m {
		gap: 1rem;
		flex-direction: column;
	}
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
.wrap_prices {
	display: flex;
	width: 100%;
	gap: 6rem;
	align-items: center;
	justify-content: center;
	@include m {
		gap: 3rem;
	}
	@include t {
		gap: 1.4rem;
	}
	@include mob {
		flex-direction: column;
	}
}
.wrap_price_left {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
	flex-direction: column;
	@include m {
		gap: 2.6rem;
	}
	@include t {
		gap: 1.4rem;
	}
	p {
		color: #fff;
		font-family: Raleway;
		font-size: 2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 3rem; /* 190% */
		letter-spacing: 0.144rem;
		text-transform: uppercase;
		@include m {
			font-size: 1.6rem;
			justify-content: center;
			text-align: center;
			line-height: 2.4rem;
		}
		@include t {
			font-size: 1.4rem;
			line-height: 2rem;
		}
	}
}
.middl_line {
	height: 34rem;
	width: 2px;
	background-color: #fff;
	@include mob {
		display: none;
	}
}
.wrap_price_right {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
	flex-direction: column;
	p {
		color: #fff;
		font-family: Raleway;
		font-size: 2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 3rem; /* 190% */
		letter-spacing: 0.144rem;
		text-transform: uppercase;
		@include m {
			font-size: 1.6rem;
			justify-content: center;
			text-align: center;
			line-height: 2.4rem;
		}
		@include t {
			font-size: 1.4rem;
			line-height: 2rem;
		}
	}
}
.footer__form {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	max-width: 100rem;
	width: 100%;
	gap: 2rem;
	@include m {
		align-items: center;
	}
	@include t {
	}
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
	padding: 0 4rem;
	width: 100%;
	@include m {
		width: auto;
	}
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
		@include t {
			font-size: 1.2rem;
			line-height: 1.4rem;
		}
	}
}
.footer__right_wrapper {
	align-items: flex-start;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	padding: 0 4rem;
}
.wrap_form_contacts {
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 9rem;
	max-width: 134rem;
	@include m {
		flex-direction: column-reverse;
		align-items: center;
		gap: 4rem;
	}
}
footer {
	background: #232a33;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 8.4rem 0rem 3rem 0rem;
	@include m {
		padding: 6rem 0rem 3rem 0rem;
	}
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
	@include m {
		gap: 2rem;
	}
	@include t {
		flex-direction: column;
		gap: 4rem;
	}
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
	@include m {
		padding: 7rem 4rem;
	}
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
	height: 40rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 12rem 0;
	background-image: url('../assets/img/back_number.png');
	background-attachment: fixed;
	background-size: cover;
	@include t {
		background-size: cover;
		padding: 8rem 0;
		height: 28rem;
	}

	h1 {
		color: #fff;
		text-align: center;
		font-family: Raleway;
		font-size: 3.4rem;
		font-style: normal;
		font-weight: 800;
		line-height: 3.4rem; /* 100% */
		letter-spacing: 0.24rem;
		text-transform: uppercase;
		margin-bottom: 2.8rem;
		@include t {
			font-size: 2.8rem;
			line-height: 2.8rem; /* 100% */
			margin-bottom: 2rem;
		}
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
		@include t {
			font-size: 2rem;
			line-height: 2.4rem; /* 100% */
			margin-bottom: 2rem;
		}
	}
	h2 {
		color: #fff;
		text-align: center;
		font-family: Raleway;
		font-size: 6rem;
		font-style: normal;
		font-weight: 800;
		line-height: 6rem; /* 121.25% */
		letter-spacing: 0.48rem;
		text-transform: uppercase;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		gap: 1rem;
		@include t {
			font-size: 3rem;
			line-height: 3rem;
		}
		@include mob {
			font-size: 2.4rem;
			line-height: 2.4rem;
		}
		img {
			width: 7rem;
			@include m {
				width: 6rem;
			}
			@include t {
				width: 3rem;
			}
		}
	}
}
.wrap_slider:deep(.swiper) {
	padding-right: 4rem !important;
	@include mob {
		padding-right: 0rem !important;
	}
}
.wrap_point_text {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	max-width: 20rem;
	@include m {
		max-width: 16rem;
	}
	@include t {
		max-width: 30rem;
		width: 100%;
	}
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
		@include t {
			font-size: 2rem;
			line-height: 2rem; /* 100% */
		}
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
	@include t {
		font-size: 2.4rem;
		line-height: 2.4rem; /* 100% */
	}
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
	@include t {
		font-size: 2rem;
		line-height: 2.2rem; /* 158.333% */
	}
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
	@include m {
		padding: 6rem 10rem;
	}
	@include t {
		padding: 3rem 6rem;
	}
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
	@include m {
		font-size: 4rem;
		line-height: 4.1rem;
	}
}
.price_section__desc {
	color: #fff;
	text-align: center;
	font-family: Raleway;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: 400;
	line-height: 3rem; /* 158.333% */
	letter-spacing: 0.144rem;
	text-transform: uppercase;
	margin-bottom: 4rem;
	@include m {
		font-size: 1.8rem;
		margin-bottom: 2rem;
	}
	@include t {
		font-size: 1.4rem;
	}
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
	@include m {
		margin-bottom: 3rem;
	}
	@include t {
		margin-bottom: 2rem;
		gap: 1.6rem;
		font-size: 2.4rem;
		line-height: 2.4rem; /* 100% */
	}

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
		@include t {
			font-size: 1.8rem;
			line-height: 2rem; /* 100% */
		}
		@include mob {
			font-size: 1.4rem;
			line-height: 1.8rem;
		}
	}
}

.about_sell {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 8rem 6rem 4rem 6rem;
	@include m {
		padding: 4rem 5rem 4rem 5rem;
	}
	@include t {
		padding: 3rem 2rem 4rem 2rem;
	}
	@include mob {
		padding: 3rem 1rem 4rem 1rem;
	}
}
.form-container {
	background-color: #b07c4e;
	padding: 2.6rem;
	border-radius: 8px;
	max-width: 50rem;
	max-height: 44.8rem;
	width: 100%;
	text-align: center;
	@include t {
		max-width: 38rem;
		max-height: 50rem;
	}
	.title_form {
		color: #fff;
		font-family: Raleway;
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 900;
		line-height: 2.4rem; /* 150% */
		letter-spacing: 0.18rem;
		text-transform: uppercase;
		margin-bottom: 1rem;
		@include t {
			font-size: 1.4rem;
			line-height: 1.8rem;
		}
		@include mob {
			font-size: 1rem;
		}
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
	@include m {
		background-size: cover;
	}
	@include t {
		align-items: center;
		justify-content: center;
		min-height: 58rem;
		background-size: cover;
		padding: 2rem 4rem;
	}
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
	@include m {
		max-width: 100rem;
	}
	@include t {
		max-width: 60rem;
	}
	@include mob {
		max-width: 40rem;
	}
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
