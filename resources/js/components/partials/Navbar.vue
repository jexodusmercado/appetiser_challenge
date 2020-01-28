<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">John Exodus Mercado</router-link>
            </div>
 
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/" activeClass="active" tag="li"><a>Home</a></router-link>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>
 
<script>
    export default {
        name: "cmp-navbar"
    }
</script>
 
<style scoped>
 
</style>