import React from 'react';
import './collectionPreview.scss';

import CollectionItem from '../collection-item';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={ item }/>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;