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
    <nav>
      <menu class="rightMenu">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/drinks">Drinks</RouterLink>
        </li>
        <li>
          <RouterLink to="/flavors">Flavors</RouterLink>
        </li>
        <li>
          <RouterLink to="about">About</RouterLink>
        </li>
        <li v-if="$store.state.token != null">
          <RouterLink to="account">{{ $store.state.user?.username }}'s account</RouterLink>
        </li>
      </menu>
      <menu class="leftMenu">
        <li v-if="$store.state.token != null">
          Welcome, {{ $store.state.user?.username }}
        </li>
        <li v-if="$store.state.token != null">
          <a href="#" @click="logout">Logout</a>
        </li>
        <li v-if="$store.state.token == null">
          <RouterLink to="/login">Login</RouterLink>
        </li>
        <li>
          <RouterLink to="/cart">Cart</RouterLink>
        </li>
      </menu>
    </nav>
  </header>
  <RouterView />
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
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

  .logo {
    margin: 0 2rem 0 0;
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
</style> -->
