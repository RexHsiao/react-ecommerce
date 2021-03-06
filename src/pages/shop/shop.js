import React from 'react';
import './shop.scss';
import SHOP_DATA from './shopData';

import CollectionPreview from '../../components/collectionPreview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (<div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>)
    }
}

export default ShopPage;