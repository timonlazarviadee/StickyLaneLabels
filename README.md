# bpmn-js-sticky-lane-labels

An optional [bpmn-js](https://github.com/bpmn-io/bpmn-js) module that keeps lane and participant labels visible while their elements are scrolled horizontally.

## Install

```sh
npm install bpmn-js-sticky-lane-labels
```

The package requires `bpmn-js` 18.31.1 or later in the 18.x line.

## Use

Register the module and its stylesheet with a bpmn-js modeler:

```javascript
import BpmnModeler from 'bpmn-js/lib/Modeler';
import StickyLaneLabelsModule from 'bpmn-js-sticky-lane-labels';
import 'bpmn-js-sticky-lane-labels/styles.css';

const modeler = new BpmnModeler({
  container: '#canvas',
  additionalModules: [
    StickyLaneLabelsModule
  ]
});

await modeler.importXML(xml);
```

The module is opt-in and does not change bpmn-js behavior unless added to
`additionalModules`. The stylesheet must be included by the consuming application.

## Development

```sh
npm install
npm run all
```

## License

MIT. See [LICENSE](./LICENSE).
