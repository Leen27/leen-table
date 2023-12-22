import {
    h,
    defineComponent,
    // SetupContext
} from 'vue'

function LTable<Props extends any>(
    // props: Props,
    // context: SetupContext<{}, {}>
) {

    return () =>
        h(
            'div',
            [
                h('span', 'leen table')
            ]
        )
}

export const LTableComponent = /* #__PURE__ */ defineComponent(
    LTable as any,
    {
        inheritAttrs: false,
    }
)
  