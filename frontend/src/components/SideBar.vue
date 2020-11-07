<template>
    <div>
        <ul>
            <li>
                <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'ficha'}">Ficha</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'SideBar'
}
</script>

<style>
ul {
    padding: 0;
}

li {
    list-style-type: none;
}
</style>