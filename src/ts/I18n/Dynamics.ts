/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "I18n.Dynamics": {
            /** @default Keywords that advanced in ranks */
            Number_keywords_better_ranks: string;
            /** @default Keywords that didn't change ranks */
            Number_keywords_same_ranks: string;
            /** @default Keywords that dropped in ranks */
            Number_keywords_drop_ranks: string;
            /** @default Find in table */
            Search_table: string;
            /** @default Find on page */
            Search_page: string;
            /** @default Snippets */
            Snippets: string;
            /** @default Delete all results for the applied date */
            Remove_results: string;
            /** @default this action cannot be undone */
            oneway_operation: string;
            /** @default Do you want to continue? */
            Proceed_deleting_ask: string;
            /** @default By target URL */
            Sort_by_target: string;
            /** @default Default settings */
            Sort_by_default: string;
            /** @default By ranked URL */
            Sort_by_relevant: string;
            /** @default Ranking dynamics over period */
            Sort_by_position_change: string;
            /** @default Filter by tag */
            Filter_by_tag: string;
            /** @default Set target for group */
            Set_target_for_group: string;
            /** @default Send to Email */
            Send_email: string;
            /** @default Target URL */
            Target_URL: string;
            /** @default You updated keyword ranks less than 5 minutes ago */
            Rankings_updated_less_than_5minutes: string;
            /** @default Add keywords and select locations<br> in project settings */
            Add_keywords_locations_notice: string;
            /** @default We're processing your tasks. */
            Tasks_processing_notice: string;
            /** @default We're updating your keyword rankings. */
            Ranks_updating_notice: string;
            /** @default Last update */
            Updated: string;
            /** @default Rankings and snippets */
            Positions_snippets: string;
            /** @default Last 7 days */
            Period_last_7_days: string;
            /** @default Last 10 days */
            Period_last_10_days: string;
            /** @default Last 30 days */
            Period_last_30_days: string;
            /** @default Optional dates */
            Any_dates: string;
            /** @default This month */
            Current_month: string;
            /** @default Previous month */
            Previous_month: string;
            /** @default Last year */
            Last_year: string;
            /** @default Random */
            Random: string;
            /** @default Period */
            Period_regular: string;
            /** @default Two dates */
            Period_2_dates: string;
            /** @default First and last date */
            Period_2_margin_dates: string;
            /** @default Two latest dates */
            Period_2_latest_dates: string;
            /** @default First date */
            Period_first_date: string;
            /** @default Last date */
            Period_last_date: string;
            /** @default One date */
            Period_1_date: string;
            /** @default Only Yandex updates */
            Period_only_updates: string;
            /** @default Last day of month */
            Last_day_month: string;
            /** @default Max dates */
            Count_dates: string;
            /** @default Top, progress */
            Painting_0: string;
            /** @default Improved, dropped */
            Painting_1: string;
            /** @default After rank tracking */
            Report_after_tracking_30min_1: string;
            /** @default in 30 minutes */
            Report_after_tracking_30min_2: string;
            /** @default Week's average */
            Display_week_average_ranking: string;
            /** @default Summary */
            Summary: string;
            /** @default Charts */
            Show_graphics: string;
            /** @default Target = Ranked */
            Target_equal_relevant: string;
            /** @default Hide group names */
            Off_display_group_names: string;
            /** @default Show group names */
            On_display_group_names: string;
            /** @default Display names under groups */
            Display_group_names_above: string;
            /** @default Display names near groups */
            Display_group_names_near: string;
            /** @default Display / Hide global search volume */
            Show_global_volume: string;
            /** @default Are you sure you want to delete a selected keyword? */
            Remove_keyword: string;
            /** @default Wipe data for the selected date */
            Remove_history: string;
            /** @default Competitors */
            Show_competitors: string;
            /** @default Hide keywords added within the applied period */
            Hide_keywords_added_in_period: string;
            /** @default Only keywords added within the applied period */
            Only_keywords_added_in_period: string;
            /** @default All keywords */
            Show_keywords_added_in_period: string;
            /** @default snapshots collected */
            and_save_snapshots: string;
            /** @default Check rankings of project */
            Check_rankings: string;
            /** @default Add keywords on the page */
            Add_keywords_on_page: string;
            /** @default Keywords */
            Keywords: string;
            /** @default Add search engine and location to display data */
            Add_se_location_to_display_data: string;
            /** @default Number of visits */
            Number_of_visits: string;
            /** @default Matches ranked URL */
            Matches_relevant_URL: string;
            /** @default Doesn't match ranked URL */
            Not_Matches_relevant_URL: string;
            /** @default Ranked URL history */
            Relevant_URL_change_history: string;
            /** @default Ranked URL changes */
            Relevant_URL_changes: string;
            /** @default Download */
            Download: string;
            /** @default Date order */
            Date_order: string;
            /** @default Chart export */
            Chart_export: string;
            /** @default Check */
            Calendar_legend_ranks_checked: string;
            /** @default Yandex update */
            Calendar_legend_yandex_update: string;
            /** @default Sort */
            Sort_keywords: string;
            /** @default Filter */
            Filter: string;
            /** @default No filter */
            Not_filter: string;
            /** @default Target and ranked URL */
            Target_and_relevant_URL: string;
            /** @default Match */
            Matches: string;
            /** @default Don't match */
            Not_matches: string;
            /** @default Matching not defined */
            Status_not_defined: string;
            /** @default Target not specified */
            Not_specified: string;
            /** @default with Featured Snippets */
            with_featured_snippets: string;
            /** @default Pin panel */
            Pin_panel: string;
            /** @default Pin filters */
            Pin_filters: string;
            /** @default Pin summary */
            Pin_summary: string;
            /** @default Customize view */
            Customize_view: string;
            /** @default Color theme */
            Color_theme: string;
            /** @default Download PNG image */
            Highcharts_Export_PNG: string;
            /** @default Download JPEG image */
            Highcharts_Export_JPEG: string;
            /** @default Download PDF document */
            Highcharts_Export_PDF: string;
            /** @default Download SVG image */
            Highcharts_Export_SVG: string;
            /** @default Print chart */
            Highcharts_Export_Print: string;
            /** @default Download CSV */
            Highcharts_Export_CSV: string;
            /** @default Summary mode */
            Summary_mode: string;
            /** @default Default */
            Default_summary_mode: string;
            /** @default Compact */
            Compact_summary_mode: string;
            /** @default Columns */
            Columns_summary_mode: string;
            /** @default keyword ranking report */
            order: string;
            /** @default Project has been deleted */
            Project_has_been_deleted: string;
            /** @default <b>Snippets</b> weren't collected on the selected dates. */
            Snippets_no_checked: string;
            /** @default <b>Snippets</b> aren't being collected. Turn this feature on in the project's settings. */
            Snippets_no_checking: string;
            /** @default <p>Selected period is the hight load.</p><p>If you need to get results in the morning, we recommend setting time from <i></i> to <i></i> in the morning.</p> */
            Selected_time_is_hightload: string;
            /** @default Delete keyword */
            Delete_keyword: string;
            /** @default Recheck keyword ranking */
            Recheck: string;
            /** @default Tracking */
            Checking: string;
            /** @default Ranking successfully rechecked */
            Recheck_finish: string;
            /** @default Target link not added */
            No_target_status: string;
            /** @default Search results not found */
            No_result_target_status: string;
            /** @default Result does not match a target link */
            Bad_target_status: string;
            /** @default Result matches a target link */
            Good_target_status: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
