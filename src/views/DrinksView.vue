<script>
import drinkService from '@/services/drink-service';

export default {
    data() {
        return {
            drinks: []
        }
    },
    methods: {
        selectDrink(name) {
            localStorage.setItem("selectedDrink", name);
            this.$router.push('/flavors');
            console.log(name)
        }
    },
    created() {
        drinkService.listDrink().then((response) => {
            this.drinks = response.data;
        });
    }
}
</script>

<template>
    <header>
        <h1>Drink options</h1>
    </header>
    <section class="allDrinks">
        <button @click="selectDrink(drink.name)" v-for="drink in drinks" :key="drink">{{ drink.name }}</button>
    </section>
</template>

<style scoped>
h1 {
    text-align: center;
}

section {
    display: flex;
    flex-wrap: wrap;
}

button {
    width: 160px;
    border-radius: 5px;
    flex-wrap: wrap;
    margin: 0 10px 10px 0;
    background-color: white !important;
    color: black !important;
    border: 2px solid #008CBA !important;
}

button:hover {
    background-color: #008CBA !important;
    color: white;
}
</style>