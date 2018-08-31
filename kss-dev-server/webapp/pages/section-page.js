import Vue from 'vue';
import fetchJSON from '../fetchJSON';

Vue.component('section-page', {
    props: ['sectionReference'],
    data() {
        return { section: null };
    },
    created() {
        fetchJSON(`/api/sections/${this.sectionReference}`).then(section => {
            this.section = section;
        });
    },
    template: `
        <div class="sb1ds-kss__page sb1ds-kss__page--section">
            <div class="sb1ds-kss__root-nav-link-container">
              <root-nav-link>table of contents</root-nav-link>
            </div>
            <div v-if="section">
                <div class="sb1ds-kss__section sb1ds-kss__section--default">
                  <h1 class="sb1ds-kss__section-header">{{section.header}}</h1>
                  <markup-preview :markup="section.markup"/>
                </div>

                <div v-for="modifier in section.modifiers"
                  class="sb1ds-kss__section sb1ds-kss__section--modifier">
                  <h2 class="sb1ds-kss__modifier-header">{{modifier.name}}</h2>
                  <markup-preview :markup="section.markup" :modifier="modifier.className"/>
                </div>

                <div class="sb1ds-kss__section sb1ds-kss__section--markup">
                  <h2 class="sb1ds-kss__markup-header">Markup</h2>
                  <html-source :source="section.markup"/>
              </div>
            </div>
            <div v-else class="sb1ds-kss__spinner">ajax-spinner.gif</div>
        </div>
    `,
});
