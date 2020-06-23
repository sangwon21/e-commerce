import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/Collection-Item/CollectionItem";

import "./Collection.styles.scss";

const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    <h2>Category</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
