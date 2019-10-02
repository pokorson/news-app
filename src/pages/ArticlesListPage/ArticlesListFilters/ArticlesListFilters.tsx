import React from "react";
import Select from "../../../ui/Select";
import Button from "../../../ui/Button";

import styles from "./ArticlesListFilters.module.scss";

interface ArticlesListFiltersProps {
  filters: any;
  clearFilters: any;
  updateFilters: any;
}

const ArticlesListFilters = (props: ArticlesListFiltersProps) => {
  return (
    <div className={styles["ArticlesListFilters"]}>
      <div className={styles["FiltersContainer"]}>
        <div className={styles["FilterItem"]}>
          <Select
            placeholder="Topic"
            value={props.filters.topic}
            onChange={(value: any) => props.updateFilters({ topic: value })}
            options={[
              { value: "tech", label: "Tech" },
              { value: "travel", label: "Travel" },
              { value: "politics", label: "Politics" },
              { value: "sports", label: "Sports" }
            ]}
          />
        </div>
        <div className={styles["FilterItem"]}>
          <Select
            placeholder="Time"
            value={props.filters.date}
            onChange={(value: any) => props.updateFilters({ date: value })}
            options={[
              { value: "month", label: "This month" },
              { value: "week", label: "This week" },
              { value: "day", label: "Today" }
            ]}
          />
        </div>
        <div className={styles["FilterItem"]}>
          <Select
            placeholder="Sort by"
            value={props.filters.sortBy}
            onChange={(value: any) => props.updateFilters({ sortBy: value })}
            options={[
              { value: "popularity", label: "Popularity" },
              { value: "publishedAt", label: "Published at" }
            ]}
          />
        </div>
      </div>
      <Button
        label="Clear filters"
        onClick={props.clearFilters}
        btnType="secondary"
        className={styles["ClearButton"]}
      />
    </div>
  );
};

export default ArticlesListFilters;
