<template>
    <header>
        <div class="header-container">
            <router-link class="logo" to="/"><img src="@/assets/img/logo.png" /></router-link>
            
        </div>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/new">Add New Collection</router-link></li>
            </ul>
        </nav>
    </header>
</template>