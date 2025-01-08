<template>
    <div class="page" id="page4">
        <div class="grid-container">
            <!-- Images du haut -->
            <router-link to="/henry" class="grid-item-link">
                <div class="grid-item"></div>
            </router-link>
            <router-link to="/mohamed" class="grid-item-link">
                <div class="grid-item"></div>
            </router-link>
            
            <!-- Titre au milieu -->
            <div class="childrens-title">
                <h1>Découvrez leurs histoires</h1>
            </div>
            
            <!-- Images du bas -->
            <router-link to="/avraham" class="grid-item-link">
                <div class="grid-item"></div>
            </router-link>
            <router-link to="/rania" class="grid-item-link">
                <div class="grid-item"></div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Childrens",
};
</script>

<style scoped>
.childrens-title {
    grid-column: 1 / span 2;
    text-align: center;
    margin: 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 400;
    font-family: 'Lora', serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
}
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr auto 1fr;
    gap: 20px;
    width: 70%;
    height: 70%;
}

.grid-item {
    background-size: cover;
    background-position: center;
    height: 100%;
}

.grid-container a:nth-child(1) .grid-item { background-image: url('../assets/childrens/henry.png'); }
.grid-container a:nth-child(2) .grid-item { background-image: url('../assets/childrens/mohamed.png'); }
.grid-container a:nth-child(4) .grid-item { background-image: url('../assets/childrens/avraham.png'); }
.grid-container a:nth-child(5) .grid-item { background-image: url('../assets/childrens/rania.png'); }

.grid-item-link {
    text-decoration: none;
    display: block;
    transition: transform 0.3s ease;
}

.grid-item-link:hover {
    transform: scale(1.05);
}
</style>