wp.blocks.registerBlockType('dave/block-1', {
    title: 'Block One',
    icon: 'smiley',
    category: 'text',
    attributes: {
        content: {type: 'string'},
        color: {type: 'string'}
    },
    edit: function (props) {
        function updateContent(event) {
            props.setAttributes({content: event.target.value})
        }
        function updateColor(value) {
            props.setAttributes({color: value.hex})
        }
        return wp.element.createElement(
            "div",
            null, 
            wp.element.createElement(
                "h3",
                null,
                "Block One"
            ),
            wp.element.createElement(
                "input", {
                    type: "text",
                    onChange: updateContent,
                    value: props.attributes.content
                }
            ),
            wp.element.createElement(
                wp.components.ColorPicker, {
                    onChangeComplete: updateColor,
                    color: props.attributes.color
                }
            )
        );
    },
    save: function (props) {
        return wp.element.createElement(
            "h3", {
                style: {
                    border: "5px solid " + props.attributes.color
                }
            },
            props.attributes.content
        );
    }
})