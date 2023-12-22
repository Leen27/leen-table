import {
    h,
    defineComponent,
    // SetupContext
} from 'vue'
import TableView from './table.vue'
function LTable<Props extends any>(
    // props: Props,
    // context: SetupContext<{}, {}>
) {

    return () =>
        h(
            'div',
            [
                h(TableView)
            ]
        )
}

export const LTableComponent = /* #__PURE__ */ defineComponent(
    LTable as any,
    {
        inheritAttrs: false,
    }
)
  