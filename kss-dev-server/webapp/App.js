import Vue from 'vue';
import fetchJSON from './fetchJSON';

export default new Vue({
    el: '#theApp',
    data: {
        currentRoute: window.location.pathname,
        sections: [],
    },
    computed: {
        isRoot() {
            return this.currentRoute === '/';
        },
        selectedSectionReference() {
            return this.currentRoute.slice(10);
        },
    },
    created() {
        fetchJSON('/api/sections').then(sections => {
            this.sections = sections;
        });
    },
    template: `<div>
        <main-page v-if='isRoot' :sections='sections'/>
        <section-page v-else :sectionReference='selectedSectionReference'/>
    </div>`,
});
