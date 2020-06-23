import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionOverview/CollectonOverview";
import CollectionPage from "../Collection/Collection";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
