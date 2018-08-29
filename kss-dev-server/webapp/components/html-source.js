import Vue from 'vue';
import { highlight } from 'highlight.js';
import 'highlight.js/styles/github.css';

Vue.component('html-source', {
    props: {
        source: String,
    },
    computed: {
        html() {
            return highlight('html', this.source).value;
        },
    },
    template: `
    <pre class="sb1ds-kss__html-source"><code class="html" v-html="html"></code></pre>
  `,
});
