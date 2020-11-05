import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import styles from "./Search.module.css";

import {
  setSearchedItem,
  setResults,
  setSelected,
  selectResults,
  setCollection,
} from "./searchSlice";
import CollectionList from "../lists/CollectionList";
export default function Search({
  placeHolder = "Search",
  searchTitle = "",
  collection,
}) {
  let [showResults, setShowResults] = useState(false);
  const results = useSelector(selectResults);
  let dispatch = useDispatch();
  const getResults = (searchedTerm, collectionItems) => {
    return _.filter(collectionItems, (item) => {
      return item.name.toLowerCase().includes(searchedTerm.toLowerCase());
    });
  };
  let [searched, setSearched] = useState("");
  const handleChange = (e) => {
    setSearched(e.target.value.trim());
    if (searched.length > 0) {
      dispatch(setSearchedItem(searched));
      let results = getResults(searched, collection);
      if (results) {
        dispatch(setResults(results));
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let searched = e.target.elements.search.value.trim();
    if (searched.length > 0) {
      dispatch(setSearchedItem(searched));
      let results = getResults(searched, collection);
      if (results) {
        dispatch(setResults(results));
      }
    }
  };

  useEffect(() => {
    if (results) {
      setShowResults(true);
    }
    if (collection) {
      if (collection.length > 0) {
        dispatch(setCollection(collection));
      }
    }
  }, [collection, results]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <button type="submit" className={styles.search__component__button}>
            Search
          </button>

          <input
            onChange={handleChange}
            id={"search"}
            name={"search"}
            type={"search"}
            placeholder={placeHolder}
            className={styles.search__component__input}
          />
        </div>
      </form>
      <div id={"search__component_results"}>
        {showResults ? (
          <CollectionList
            collection={results}
            handleClick={(e) => {
              const id = e.target.id;
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
