import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Spinner from "../../components/spinner/spinner.component";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collection-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

function ShopPage({ match, fetchCollectionsStart }) {
  useEffect(() => {
    fetchCollectionsStart();
  });

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
