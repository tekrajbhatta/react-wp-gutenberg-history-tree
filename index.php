<?php

function vdplug_history_tree_init()
{
    register_block_type(
        VDPLUG_DIR . '/build/blocks/history-tree'
    );
}
add_action('init', 'vdplug_history_tree_init');
