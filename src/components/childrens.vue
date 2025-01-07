<template>
    <div class="page" id="page4">
        <div class="grid-container">
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Childrens",
};
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 50px;
    width: 70%;
    height: 70%;
}

.grid-item {
    background-size: cover;
    background-position: center;
    min-height: 200px;
}

.grid-item:nth-child(1) { background-image: url('../assets/childrens/henry.png'); }
.grid-item:nth-child(2) { background-image: url('../assets/childrens/mohamed.png'); }
.grid-item:nth-child(3) { background-image: url('../assets/childrens/avraham.png'); }
.grid-item:nth-child(4) { background-image: url('../assets/childrens/rania.png'); }
</style>