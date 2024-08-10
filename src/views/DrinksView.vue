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
        <section class="allDrinks" v-for="drink in drinks" :key="drink">
            <ul>
                <button @click="selectDrink(drink.name)">{{ drink.name }}</button>
            </ul>


        </section>

    </header>

</template>
<style scoped></style>