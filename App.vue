<template>
    <div class="page-wrapper" id="app">
        <app-header />
        <router-view />
        <app-footer />
    </div>
</template>

<script>
    import home from './components/Home.vue';
    import header from './components/Header.vue';
    import footer from './components/Footer.vue';
    import addNew from './components/New.vue';

    export default {
        name: 'app',
        components: {
            home,
            addNew,
            'app-header': header,
            'app-footer': footer,
            
        }
    };
</script>
