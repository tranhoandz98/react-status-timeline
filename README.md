# react-status-timeline

Status timeline for React.js

[![NPM](https://img.shields.io/npm/v/react-status-timeline.svg)](https://www.npmjs.com/package/react-status-timeline) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![downloads](https://img.shields.io/npm/dt/react-status-timeline)

## Install

```bash
npm install --save react-status-timeline
```
Or
```bash
yarn add react-status-timeline
```
## Usage

```jsx
import React, { Component } from 'react'

import StatusTimeLine from 'react-status-timeline'
import 'react-status-timeline/dist/index.css'

const App = () => {
  return <StatusTimeLine/>
}

export default App
```
## User guide

### StatusTimeLine
#### Props

| Prop name | Description                                                                                | Default value | Example values                      |
| --------- | ------------------------------------------------------------------------------------------ | ------------- | ----------------------------------- |
| className | Class name(s) that will be added to rendered element along with the default StatusTimeLine | n/a           | String: "class-name-1 class-name-2" |
data|Array data status|[{status: 'complete',color: success',stepName: 'Đã xong',statusStep: 'Hoàn thành',step: 'Bước 1',},{status: 'cancel',color: 'danger',stepName: 'Từ chối rồi',statusStep: 'Từ chối',step: Bước 2'}]|Default value|
statusCurrent|Current state of the timeline|2|Number: 1|
isStart|Show start status default| true|Boolean: <ul><li>`true`</li><li>`false`</li></ul>|
isEnd|Show end status default| true|Boolean: <ul><li>`true`</li><li>`false`</li></ul>|
onError|Function run when error|n/a|Function: ...
txtStart|Text start status| "Bắt đầu"|String: "Write something"|
txtActionStart|Action default start status|"Soạn thảo"|String: "Write something"|
txtEnd|Text end status| "Bắt đầu"|String: "Write something"|
txtActionEnd|Action default end status|"Hoàn thành"|String: "Write something"|
captionStep|Caption name + step name - show in title attribute of each step|"Tên bước: "|String: "Write something"|
txtStep|Text stand in front of the step| n/a|String: "Write something"|

#### Props data
|Key|Description|Example values|
|----|----|----|
status|status of step| <ul><li>`"complete"`</li><li>`"waiting"`</li><li>`"cancel"`</li></ul>|
color| color tags of step|<ul><li>`"primary"`</li><li>`"success"`</li><li>`"info"`</li><li>`"warning"`</li><li>`"danger"`</li></ul>|
stepName|Step name - show in title attribute of each step|String: "Write something"|
statusStep|Text status|String: "Write something"|
step|Action status|String: "Write something"

## License

MIT © [tranhoandz98](https://github.com/tranhoandz98)
