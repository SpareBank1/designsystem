import Vue from 'vue';

Vue.component('markup-preview', {
    props: {
        markup: {
            type: String,
            required: true,
        },
        modifier: {
            type: String,
            default: '',
        },
    },
    computed: {
        html() {
            return this.markup.replace(/{{modifier_class}}/g, this.modifier);
        },
    },
    template: '<div class="sb1ds-kss__markup-preview" v-html="html"></div>',
});
