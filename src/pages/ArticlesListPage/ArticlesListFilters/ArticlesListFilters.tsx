import React from "react";
import Select from "../../../ui/Select";
import Button from "../../../ui/Button";
import { ArticleFilters } from "../../../articles/types";

import styles from "./ArticlesListFilters.module.scss";

interface ArticlesListFiltersProps {
  filters: ArticleFilters;
  clearFilters: any;
  updateFilters: any;
}

const ArticlesListFilters = (props: ArticlesListFiltersProps) => {
  const options = {
    topic: [
      { value: "tech", label: "Tech" },
      { value: "travel", label: "Travel" },
      { value: "politics", label: "Politics" },
      { value: "sports", label: "Sports" }
    ],
    sortBy: [
      { value: "popularity", label: "Popularity" },
      { value: "publishedAt", label: "Published at" }
    ],
    date: [
      { value: "month", label: "This month" },
      { value: "week", label: "This week" },
      { value: "day", label: "Today" }
    ]
  };

  const getOptionForValue = (
    filter: "topic" | "sortBy" | "date",
    value: string | undefined
  ) => {
    if (!value) return null;
    return options[filter].find(f => f.value === value);
  };

  return (
    <div className={styles["ArticlesListFilters"]}>
      <div className={styles["FiltersContainer"]}>
        <div className={styles["FilterItem"]}>
          <Select
            placeholder="Topic"
            value={getOptionForValue("topic", props.filters.topic)}
            onChange={({ value }: { value: ArticleFilters["topic"] }) =>
              props.updateFilters({ topic: value })
            }
            options={options.topic}
          />
        </div>
        <div className={styles["FilterItem"]}>
          <Select
            placeholder="Time"
            value={getOptionForValue("date", props.filters.date)}
            onChange={({ value }: { value: ArticleFilters["date"] }) =>
              props.updateFilters({ date: value })
            }
            options={options.date}
          />
        </div>
        <div className={styles["FilterItem"]}>
          <Select
            placeholder="Sort by"
            value={getOptionForValue("sortBy", props.filters.sortBy)}
            onChange={({ value }: { value: ArticleFilters["sortBy"] }) =>
              props.updateFilters({ sortBy: value })
            }
            options={options.sortBy}
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
