## Treno UI Kit
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

> A lightweight Vue 2.x UI Kit 

### Installation

##### Via NPM
```
npm install treno-ui -S
```

##### Import
```
import Vue from 'vue'
import Treno from 'treno-ui'

Vue.use(Treno)
```

#### Drawer 侧边抽屉

##### Usage
```
<tr-drawer v-model="collapse" :width="500" position="right">
    <!-- slot -->
    <div>
        Slot Content
    </div>
</tr-drawer>
```

#### API

```
V-Model | `Boolean`.  Drawer Status, collapsed or not.
```

##### Props

| Name    | Description     | Usage                                                     |
| :---     | :---            | :---        |
| Width    | Content Width   | `String`, `Number`, (default: `'600px'`). You can set it to a number, e.g. `600` which turns out to be 600px. or a string like `"30vw"` and `"50%"`                                      |
| Position | Drawer Position | `String`, (default: `"right"`). Options: right, top, left, bottom |
| autoHide | If drawer collapse when click on the mask | `Boolean`, (default: `true`) |
| showClose | If display Close button | `Boolean`, (default: `true`) |
| customClass | Drawer Root Class | `String`, (default: `""`), Use it to overwrite default Drawer Style |
| beforeClose | callback method before close. Interrupts drawer close action  | `Function`, `function(callback) { callback() }`|

##### Events

| Name    | Description     | Example                                                     |
| :---     | :---            | :---        |
| close   | Triggers when close the drawer | `Function`, `function() { }` |
| open   | Triggers when open the drawer | `Function`, `function() { }` |
