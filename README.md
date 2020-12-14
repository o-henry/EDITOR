### JSON-like 포맷 에디터

요구 사항

- 구현

* Primitive 데이터 타입은 string, number, boolean, date 이며, 에디터 상에서 이를 validate 할 수 있어야 합니다.
* 데이터의 구조 및 depth를 파악할 수 있어야 합니다.
* 에디터 상에서 데이터 구조는 수정할 수 없습니다. 즉, 에디터 상에서 key는 수정할 필요가 없습니다. 필드는 제거되지 않습니다.

- 구현 실패

* Array 내부 엘리먼트 각각의 데이터 구조는 변하지 않는다고 가정합니다. 대신 array에 기존 엘리먼트와 동일한 데이터 구조를 가진 엘리먼트의 추가 및 엘리먼트의 삭제가 가능해야 합니다.
* 데이터는 비정형적입니다. 즉, 유저마다 데이터의 구조가 다를 수 있습니다. 예를 들면, 또다른 유저는 상기 유저에게 없는 필드를 가지고 있을 수 있으며, 그것이 object를 element로 갖는 array일 수도 있습니다.

---

### 구조

더미 데이터를 json 파일로 저장하여, fetch 한 뒤, 수정하는 에디터를 구현하려 했으나,

요구사항에 충족하는 모든 기능을 구현하지 못했습니다.

```
├── public
│   └── config
│       └── user.json
├── src
│   ├── Depth.tsx
│   ├── Editor.tsx
│   ├── components
│   │   ├── Input
│   │   │   ├── Input.tsx
│   │   │   ├── index.ts
│   │   └── └── input.css
│   ├── constant
│   │   └──  editor.ts
│   ├── containers
│   │   ├── user.edit.tsx
│   │   └── user.table.tsx
│   ├── hooks
│   │   ├── index.ts
│   │   └── useFetch.ts
│   ├── index.tsx
│   └── types
│       ├── index.ts
└──     └── type.editor.ts
```
