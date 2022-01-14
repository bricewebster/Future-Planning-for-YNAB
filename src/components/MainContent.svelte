<script lang="ts">
    import SectionContent from "./SectionContent.svelte";
</script>
<div class="content">
    <SectionContent title="Inflow" monthAmount='$3000'/>
    <SectionContent title="Outflow" monthAmount='$2800'/>
</div>
<style>
    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        margin: 35px 0 0 15px;
    }
</style>