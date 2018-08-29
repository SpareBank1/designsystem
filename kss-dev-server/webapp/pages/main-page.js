import Vue from 'vue';

Vue.component('main-page', {
    props: ['sections'],
    template: `
        <div class="sb1ds-kss__page sb1ds-kss__page--main">
            <table-of-contents :sections="sections"/>
        </div>
    `,
});
