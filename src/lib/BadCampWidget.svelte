<script>
    export let camp;
</script>

<div class="camp-widget">
    <h3>{camp.name}</h3>
</div>

<style>
    .camp-widget {
        width: 700px;
        height: 300px;
        background-color: white;
        border-radius: 5px;
        cursor: pointer;
    }

    h3 {
        color: black;
        font-weight: 100;
    }

    .camp-widget:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
</style>

