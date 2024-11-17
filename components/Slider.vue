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
		:slides-per-view="5"
		:autoplay="{ delay: 1000, disableOnInteraction: false }"
		:space-between="70"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
	>
		<swiper-slide
			><div class="slide_wrap">
				<img
					src="../assets/img/items/amortyzacja.png"
					alt="item"
					class="item_img"
				/>
				<h2 class="name_item">Amortyzacja</h2>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<img
					src="../assets/img/items/hamulce.png"
					alt="item"
					class="item_img"
				/>
				<h2 class="name_item">Hamulce</h2>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<img src="../assets/img/items/opony.png" alt="item" class="item_img" />
				<h2 class="name_item">Opony</h2>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<img
					src="../assets/img/items/karoseria.png"
					alt="item"
					class="item_img"
				/>
				<h2 class="name_item">Karoseria</h2>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<img src="../assets/img/items/olej.png" alt="item" class="item_img" />
				<h2 class="name_item">Oleje i płyny</h2>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<img
					src="../assets/img/items/elektryka.png"
					alt="item"
					class="item_img"
				/>
				<h2 class="name_item">Elektryka</h2>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<img src="../assets/img/items/filtr.png" alt="item" class="item_img" />
				<h2 class="name_item">Filtr</h2>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<img src="../assets/img/items/zawi.png" alt="item" class="item_img" />
				<h2 class="name_item">
					Zawieszenie <br />
					wahacze
				</h2>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<img src="../assets/img/items/uklad.png" alt="item" class="item_img" />
				<h2 class="name_item">Układ wydechowy</h2>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<img src="../assets/img/items/paski.png" alt="item" class="item_img" />
				<h2 class="name_item">
					Paski <br />
					łańcuchy
				</h2>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap">
				<img src="../assets/img/items/silnik.png" alt="item" class="item_img" />
				<h2 class="name_item">Osprzęt</h2>
			</div></swiper-slide
		>
		<swiper-slide
			><div class="slide_wrap end_item">
				<img src="../assets/img/items/other.png" alt="item" class="item_img" />
				<h2 class="name_item">Pozostałe kategorie</h2>
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
	width: 22rem;
	@include m {
		max-width: 16rem;
	}
	@include t {
		max-width: 12rem;
	}
	@include mob {
		max-width: 12rem;
	}
}
.item_img {
	width: 100%;
}
.name_item {
	color: #000;
	text-align: center;
	font-family: Raleway;
	font-size: 1.8rem;
	font-style: normal;
	font-weight: 800;
	line-height: 1.8rem; /* 100% */
	letter-spacing: 0.24rem;
	text-transform: uppercase;
	@include m {
		font-size: 1.6rem;
		line-height: 1.6rem;
	}
}
.end_item {
	margin-right: 4rem;
}
:deep(.swiper-slide) {
	@include m {
		margin-right: 100px !important;
	}
	@include t {
		margin-right: 130px !important;
	}
}
/* You can adjust the container styling as needed */
</style>
