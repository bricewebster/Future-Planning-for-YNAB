<script lang="ts">
    export let futureStatus: string;
</script>
<div class="content">
    <div class="nav-container">
        <span class="material-icons-round md-48 menu">menu</span>
        <p class="title">Future Planning for YNAB</p>
        <p class="planning-status">You can make it until:<br/><span>{futureStatus}</span></p>
    </div>
</div>
<style>
    .content {
        width: 100%;
        height: 60px;

        background-color:#a5b1f9;
    }
    .nav-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        padding: 5px 0 0 10px;
        width: 100%;
    }
    .menu {
        color: white;

        cursor: pointer;
    }
    .title {
        display: inline-block;

        margin-left: 15px;

        color: white;

        font-size: 30px;
        font-weight: bold;
    }
    .planning-status {
        margin: 0 50px 0 auto;
        width: 200px;

        color: white;

        text-align: center;
        font-weight: bold;
    }
</style>
