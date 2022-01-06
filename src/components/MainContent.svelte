<script>
    import SectionContent from "./SectionContent.svelte";
</script>
<div class="content">
    <SectionContent title="Inflow"/>
    <SectionContent title="Outflow"/>
</div>
<style>
    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        margin: 35px 0 0 15px;
    }
</style>