import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

function Edit() {

    const ALLOWED_BLOCKS = ['core/paragraph', 'core/image', 'core/heading']; // Allow these blocks inside

    const TEMPLATE = [
        ['core/columns', {}, [
            ['core/column', {}, [
                ['core/heading', { level: 3, content: 'Title' }],
                ['core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' }],
             
            ]],
            ['core/column', {}, [
                ['core/image', { id: 15, sizeSlug: 'large', linkDestination: 'none' }],
                ['core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' }],

            ]]
        ]],
        ['core/columns', {}, [
            ['core/column', {}, [
                ['core/image', { id: 15, sizeSlug: 'large', linkDestination: 'none' }],
               
                ['core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' }],
             
            ]],
            ['core/column', {}, [
                ['core/heading', { level: 3, content: 'Title' }],
                ['core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' }],

            ]]
        ]],
        ['core/columns', {}, [
            ['core/column', {}, [
                ['core/heading', { level: 3, content: 'Title' }],
                ['core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' }],
             
            ]],
            ['core/column', {}, [
                ['core/image', { id: 15, sizeSlug: 'large', linkDestination: 'none' }],
                ['core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' }],

            ]]
        ]],
        ['core/columns', {}, [
            ['core/column', {}, [
                ['core/image', { id: 15, sizeSlug: 'large', linkDestination: 'none' }],
               
                ['core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' }],
             
            ]],
            ['core/column', {}, [
                ['core/heading', { level: 3, content: 'Title' }],
                ['core/paragraph', { content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' }],

            ]]
        ]]
    ];

    return (
        <div className='history-tree'>
            <div className='container'>
                <div className="history-tree-inner-blocks-container">
                    <InnerBlocks
                        allowedBlocks={ALLOWED_BLOCKS}
                        template={TEMPLATE} // Optional: Template for inner blocks
                        templateLock={false}  // Allow customization or lock if needed
                    />
                </div>
            </div>
        </div>
    );
}

export default Edit;
