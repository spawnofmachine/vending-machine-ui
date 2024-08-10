<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <section v-if="$store.state.token === null">
      <h1>Welcome to the largest Vending Machine</h1>
      <p>We have a massive selection of your favorite soft drinks and still growing!</p>
    </section>
    <section v-else>
      <h1>Welcome back, {{ $store.state.user.username }}</h1>
      <p>What will the drink of the day for you?</p>
    </section>
  </header>
  <nav>
    <menu class="leftMenu">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/drinks">Drinks</RouterLink>
      <RouterLink to="about">About</RouterLink>
      <div v-if="$store.state.token != null">
        <RouterLink to="account">{{ $store.state.user?.username }}'s account</RouterLink>
      </div>
    </menu>
    <menu class="rightMenu">
      <p v-if="$store.state.token != null">
        Welcome, {{ $store.state.user?.username }}
      </p>
      <a href="#" @click="logout" v-if="$store.state.token != null">Logout</a>
      <RouterLink to="/login" v-if="$store.state.token == null">Login</RouterLink>
      <RouterLink to="/cart">Cart</RouterLink>
    </menu>
  </nav>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  justify-content: center;
}

nav {
  display: flex;
  width: 100%;
  font-size: 12px;
  /* text-align: center; */
  margin-top: 2rem;
}

.rightMenu {
  margin-left: auto;
  margin-right: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: flexbox;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
