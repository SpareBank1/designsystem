import Vue from 'vue';

Vue.component('table-of-contents', {
    props: ['sections'],
    template: `
    <table class="sb1ds-kss__toc-table">
        <tr v-for="section in sections">
            <td>{{section.referenceNumber}}</td>
            <td>{{section.header}}</td>
            <td>
            <section-nav-link v-bind="section">
              {{section.reference}}
            </section-nav-link>
            </td>
            <td>{{section.source.path}} L{{section.source.line}}</td>
        </tr>
    </table>
    `,
});
