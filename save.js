import { InnerBlocks } from '@wordpress/block-editor';

function save() {

    return (
        <div className='history-tree'>
            <div className='container'>
                <div className="history-tree-inner-blocks-container">
                    <InnerBlocks.Content
                    />
                </div>
            </div>
        </div>
    );
}

export default save;
