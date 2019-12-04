export default {
    state: {
        examples: [
            {
                id: 'kiki',
                title: 'Simple button',
                description: 'Simple button with animation',
                tags: [
                    'button',
                    'animated',
                    'spinner'
                ],
                imageId: 'ndgfddfg',
                technologies: [
                    'css',
                    'html'
                ],
                author: 'Step To Web',
                rating: 4,
                ratingsCount: 100,
                codeLinkId: 'hghghghg',
                datePublish: '11.10.2019'
            },
            {
                id: 'jkllkjggkjk',
                title: 'Checkbox',
                description: 'Simple checkbox with animation',
                tags: [
                    'checkbox',
                    'animated',
                    'spinner'
                ],
                imageId: 'ndgfdggdfg',
                technologies: [
                    'css',
                    'html',
                    'js'
                ],
                author: 'Step To Web',
                rating: 4.5,
                ratingsCount: 500,
                codeLinkId: 'hghggghghg',
                datePublish: '11.10.2019'
            },
            {
                id: 'jkllcfkjggkjk',
                title: 'Checkbox checked',
                description: 'Simple checkbox with animation',
                tags: [
                    'checkbox',
                    'animated',
                    'spinner',
                    'chacha'
                ],
                imageId: 'ndgfffdggdfg',
                technologies: [
                    'css',
                    'html',
                    'js'
                ],
                author: 'Step To Web',
                rating: 1,
                ratingsCount: 200,
                codeLinkId: 'hghffggghghg',
                datePublish: '11.10.2019'
            }
        ]
    },
    mutations: {
        SET_EXAMPLES(state, payload){
            state.examples = payload
        }
    },
    actions: {

    },
    getters: {
        getExamples: (state) => state.examples,
        getExampleId (state) {
            return ExampleId => {
                return state.examples.find(example => example.id === ExampleId)
            }
        },
        getPromoExamples (state) {
            return state.examples.filter(example => {
                return example.promo
            })
        }
    }
}