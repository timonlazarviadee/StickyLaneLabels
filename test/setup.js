import { insertCSS } from 'bpmn-js/test/helper/index.js';

import diagramCss from 'diagram-js/assets/diagram-js.css';
import bpmnCss from 'bpmn-js/dist/assets/bpmn-js.css';
import fontCss from 'bpmn-font/dist/css/bpmn-embedded.css';
import stickyLaneLabelsCss from '../styles.css';

insertCSS('diagram-js.css', diagramCss);
insertCSS('bpmn-js.css', bpmnCss);
insertCSS('bpmn-font.css', fontCss);
insertCSS('sticky-lane-labels.css', stickyLaneLabelsCss);
