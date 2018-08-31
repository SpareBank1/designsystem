import Vue from 'vue';

Vue.component('root-nav-link', {
    methods: {
        go(evt) {
            evt.preventDefault();
            this.$root.currentRoute = '/';
            window.history.pushState(null, document.title, '/');
        },
    },
    template: `
    <a href="/" v-on:click="go">
        <slot/>
    </a>
    `,
});

Vue.component('section-nav-link', {
    props: {
        reference: {
            type: String,
            required: true,
        },
    },
    computed: {
        href() {
            return `/sections/${this.reference}`;
        },
    },
    methods: {
        go(evt) {
            evt.preventDefault();
            this.$root.currentRoute = this.href;
            window.history.pushState(null, document.title, this.href);
        },
    },
    template: `
    <a v-bind:href="href" v-on:click="go">
        <slot/>
    </a>
    `,
});
