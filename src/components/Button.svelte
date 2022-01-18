<script>
    export let type = 'primary';
    $$restProps //Used to include all the props when the component is used. That way the button can be clicked, focused, etc.
</script>

<button class={type} on:click on:mouseover on:focus on:mouseenter on:mouseleave	{...$$restProps}>
    <slot></slot>
</button>

<style lang="scss">
    button {
        padding: .3em .6em;

        border-radius: .4em;

        line-height: 1em;

        cursor: pointer;
    }
    .primary {
        border: 2px solid transparent;
        background-color: #a5b1f9;

        color: white;

        &:hover {
            border-color: #A682CE;
            background-color: #A682CE;
        }
    }
    .secondary {
        border: 2px solid #a5b1f9;
        background-color: white;

        color: #a5b1f9;

        &:hover {
            background-color: #a5b1f9;
            color: white;
        }
    }
</style>