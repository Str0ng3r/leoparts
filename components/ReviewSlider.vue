<script lang="ts" setup>
// Import Swiper Vue.js components and Swiper styles
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper types
import type { Swiper as SwiperInstance } from 'swiper';

// Function that handles the Swiper instance
const onSwiper = (swiper: SwiperInstance) => {
	console.log(swiper);
};

const onSlideChange = () => {
	console.log('slide change');
};
</script>
<template>
	<swiper
		:modules="[Autoplay]"
		:slides-per-view="1"
		:autoplay="{ delay: 4000, disableOnInteraction: false }"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
	>
		<swiper-slide
			><div class="slide_wrap">
				<h2>Marina Chechat</h2>
				<p>
					Bardzo dobra firma,wiarygodna proponująca orginalne części i
					zamienniki w bardzo dobrej cenie ,trzeba też powiedzieć na plus Pan
					Paweł sprawdza po danych pojazdu pasujące części...
				</p>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<h2>Dzmitry Butskevich</h2>
				<p>Serdecznie polecam, wspaniały serwis, najniższe ceny w mieście!</p>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<h2>Eugenia Matvyjko</h2>
				<p>
					Gorąco polecam, ceny są bardzo dobre, a kierownik był bardzo fajny,
					bardzo mi pomógł!
				</p>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<h2>Valeriia Skopycz</h2>
				<p>Wszystko bardzo dobrze,Dziękuję panu Pawłowi za pomoc!Polecam</p>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<h2>Natalia Kowsz</h2>
				<p>Bardzo dobrze!</p>
			</div></swiper-slide
		>
	</swiper>
</template>

<style scoped lang="scss">
.slide_wrap {
	display: flex;
	align-items: center;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 40rem;
	margin: 0 auto;
	h2 {
		color: #a06824;
		text-align: center;
		font-family: Raleway;
		font-size: 3rem;
		font-style: normal;
		font-weight: 700;
		line-height: 3.3rem; /* 137.5% */
		letter-spacing: 0.144rem;
		text-transform: uppercase;
		margin-bottom: 2rem;
	}
	p {
		color: #2b2b2b;
		text-align: center;
		font-family: Raleway;
		font-size: 2rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.7rem; /* 150% */
	}
}
.end_item {
	margin-right: 4rem;
}
/* You can adjust the container styling as needed */
</style>
