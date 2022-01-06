<script lang="ts">
	import LandingPage from "./components/LandingPage.svelte";
	import PlanningPage from "./components/PlanningPage.svelte";

	let linkedYNABAccount = true;
	//let accessToken;

	/**
	 * Checks if an access token is present in the params and if so it'll load up the app.
	 */
	// function linkedCheck() {
    //     const urlSearchParams = new URLSearchParams(window.location.search);
	// 	window.history.pushState({}, document.title, "/"); //Removes query strings for cleaner look
    //     const params = Object.fromEntries(urlSearchParams.entries());
    //     accessToken = params.token;
	// 	let refreshToken = params.refresh
    //     if (accessToken != null) {
	// 		localStorage.setItem("new", refreshToken);
	// 		linkedYNABAccount = true;
    //     }
    // }
	// linkedCheck();
</script>

<main>
	{#if linkedYNABAccount === false}
		<LandingPage/>
	{:else}
		<PlanningPage/>	
	{/if}
</main>


<style lang="scss">
	/**
		Project uses outside in principle discribed on https://webdesign.tutsplus.com/articles/outside-in-ordering-css-properties-by-importance--cms-21685 for css property organization.
	*/
	main {
		margin: 0 auto;

		width: 100%;
		height: 100%;
	}
</style>