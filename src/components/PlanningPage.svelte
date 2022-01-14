<script lang="ts">
    import Navbar from "./Navbar.svelte";
    import MainContent from "./MainContent.svelte"

    let futureStatus = '> 1 year';
</script>
<div class="content">
    <Navbar {futureStatus}/>
    <MainContent />
</div>
<style>
    /* your styles go here */
</style>
