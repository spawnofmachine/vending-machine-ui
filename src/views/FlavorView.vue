<script>
import flavorService from '@/services/flavor-service';

export default {
    data() {
        return {
            flavors: [],
            injectedClass: 'activebtn'
        }
    },
    created() {
        flavorService.listFlavor().then((response) => {
            this.flavors = response.data;
        }),
            this.flavors.forEach((flavor) => {
                flavor.isSelected = false;
            })
    },
    methods: {
        selectFlavor(flavor) {
            let selectedFlavors = JSON.parse(localStorage.getItem("selectedFlavor"));
            if (!selectedFlavors) {
                selectedFlavors = []
            }
            flavor.isSelected = !flavor.isSelected
            if (flavor.isSelected === true) {
                selectedFlavors.push(flavor.name);
            } else {
                selectedFlavors.splice(selectedFlavors.indexOf(flavor.name), 1);
            }
            localStorage.setItem("selectedFlavor", JSON.stringify(selectedFlavors));
            // this.$router.push('/cart');
            console.log(localStorage.getItem("selectedDrink") + ' ' + flavor.name)

        }
    }
}
</script>

<template>
    <h1>Selection of flavors</h1>
    <section class="allFlavors" v-for="flavor in flavors" :key="flavor">
        <ul>
            <button v-bind:class="flavor.isSelected ? 'activeBtn' : 'btnDeactivated'" @click="selectFlavor(flavor)">{{
                flavor.name }}</button>
        </ul>


    </section>
</template>



<style scoped>
button {
    width: 160px;
    border-radius: 5px;
}

.activeBtn {
    background-color: #4CAF50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    transition-duration: 0.2s;
    cursor: pointer;
}

.btnDeactivated {
    background-color: white !important;
    color: black !important;
    border: 2px solid #008CBA !important;
}

.btnDeactivated:hover {
    background-color: #008CBA !important;
    color: white;
}
</style>