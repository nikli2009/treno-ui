## Treno UI Kit

> Vue 2.x UI Kit 

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
V-Model | Boolean.  Drawer Status, collapsed or not.
```


| Props    | Description     | Value                                                     |
|----------|-----------------|-----------------------------------------------------------|
| Width    | Content Width   | Number, Default: 300                                      |
| Position | Drawer Position | String, Default: right. Options: right, top, left, bottom |                                                      |
