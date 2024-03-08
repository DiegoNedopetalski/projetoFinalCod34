<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible}">
		<HeaderVue title="Cod3r - Base de Conhecimento" :hideToggle="false"
		:hideUserDropdown="false"
		/>
		<MenuVue/>
		<ContentVue/>
		<FooterVue/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderVue from '@/components/template/HeaderVue' ;
import FooterVue from '@/components/template/FooterVue';
import MenuVue from '@/components/template/MenuVue';
import ContentVue from '@/components/template/ContentVue';

export default {
	name: "App",
	components: { HeaderVue, FooterVue, MenuVue, ContentVue },
	computed: mapState(['isMenuVisible'])
}
</script>

<style>
	* {
		font-family: "Lato", sans-serif;
	}

	body {
		margin: 0;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 300px 1fr;
		grid-template-areas: 
			"header header"
			"menu content"
			"menu footer";
	}

	#app.hide-menu {
		grid-template-areas:
			"header header"
			"content content"
			"footer footer";
	}
</style>